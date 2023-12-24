import os
import time
from datetime import datetime, timedelta
from config_loader import load_config  # Importing the load_config function

class SessionTracker:
    def __init__(self, config, last_session_end_file):
        self.config = config
        self.system = config.get('system', 'unknown')
        self.total_usage_today = timedelta()
        self.last_session_end_file = last_session_end_file
        self.last_session_end = self.read_last_session_end()

    ## SESSION: Validate ##
    def read_last_session_end(self):
        if os.path.exists(self.last_session_end_file):
            with open(self.last_session_end_file, 'r') as file:
                last_end_str = file.read().strip()
                if last_end_str:
                    return datetime.fromisoformat(last_end_str)
        return None
    
    def write_last_session_end(self):
        with open(self.last_session_end_file, 'w') as file:
            file.write(self.last_session_end.isoformat())

    def calculate_session_end(self):
        max_duration_hours = float(self.config["session"]["max_duration"])
        self.session_end = self.session_start + timedelta(hours=max_duration_hours)

    def check_and_end_session(self, current_time, log_file):
        if current_time >= self.session_end:
            self.last_session_end = current_time
            self.write_last_session_end()
            log_file.write(f"Session ended at: {self.last_session_end}\n")
            break_time = int(float(self.config["session"]["break"])*60)
            self.display_notification(f" Session ended. Taking a break.\r\nYou can start a new session after: {break_time} minutes.")
            return True
        return False
                
    ## SESSION: START ##
    def start_session(self, current_time):
        now = current_time
        print(f"Attempting to start session at: {now}")  # Debugging statement
        if not self.is_within_allowed_time(now): 
            next_start_time = self.calculate_next_start_time(now)
            self.notify_next_start_time(next_start_time)
            self.wait_until(next_start_time)
            self.session_start = next_start_time
            return False  # Session not started
        else:
            # Check if the required break time has passed since the last session ended
            if self.last_session_end:
                break_duration = timedelta(hours=float(self.config["session"]["break"]))
                if now < self.last_session_end + break_duration:
                    self.display_notification("Break time has not elapsed yet.")
                    return False  # Break time not yet elapsed

            self.session_start = now
        self.calculate_session_end()
        return True

    def is_within_allowed_time(self, current_time):
        day_type = "weekend_holiday" if current_time.weekday() >= 5 else "weekday"
        start_time = self.config["day"][day_type]["cutoff_timings"]["start"]
        end_time = self.config["day"][day_type]["cutoff_timings"]["end"]

        return start_time <= current_time.time() <= end_time

    def calculate_next_start_time(self, current_time):
        day_type = "weekend_holiday" if current_time.weekday() >= 5 else "weekday"
        next_start_date = current_time.date()
        next_start_time = self.config["day"][day_type]["cutoff_timings"]["start"]

        if current_time.time() > next_start_time:
            next_start_date += timedelta(days=1)  # Move to the next day

        return datetime.combine(next_start_date, next_start_time)

    def wait_until(self, target_time):
        while datetime.now() < target_time:
            stime = (target_time - datetime.now()).total_seconds() / 2
            time.sleep(stime)
            #print(f"sleeping for following seconds: ", {stime})

    ## UTILS ##
    def notify_next_start_time(self, next_start_time):
        message = f" Session cannot start now.\r\nNext available start time: {next_start_time}"
        self.display_notification(message)

    def display_notification(self, message):
        if self.system == 'ubuntu':
            self.display_ubuntu_notification(message)
        elif self.system == 'windows':
            self.display_windows_notification(message)
        else:
            print(message)  # Default action        
    def display_ubuntu_notification(self, message):
        os.system(f'notify-send "Laptop Usage Control" "{message}"')
        # TODO: Add system shutdown command
    def display_windows_notification(self, message):
        pass  # Placeholder for Windows notification implementation

    def get_remaining_time(self):
        remaining_time = self.session_end - datetime.now()
        return max(remaining_time.total_seconds(), 0)

## UTILS ##
def get_file_path(config, file_type):
    system = config.get('system', 'unknown')    
    if system == 'ubuntu':
        log_file_path = '/home/ubuntu/Documents/laptop-tracker.log'
        last_session_end_file_path = '/home/ubuntu/Documents/last_session_end.txt'
    elif system == 'windows':
        log_file_path = r'C:\Windows\System32\laptop-tracker.log'
        last_session_end_file_path = r'C:\Windows\System32\last_session_end.txt'
    else:
        home_dir = os.path.expanduser('~')
        log_file_path = os.path.join(home_dir, 'laptop-tracker.log')
        last_session_end_file_path = os.path.join(home_dir, 'last_session_end.txt')
    
    return log_file_path if file_type == "log" else last_session_end_file_path


# MAIN COMMAND
if __name__ == "__main__":
    config = load_config('/home/ubuntu/Desktop/apps-configs/appu-gamingbox/laptop-controller/laptop-schedule.json')
    
    tracker = SessionTracker(config, get_file_path(config, 'last_session_end'))
    with open(get_file_path(config, 'log'), 'a') as log_file:
        while True:
            current_time = datetime.now()
            print(f"current_time: {current_time}")
            if tracker.start_session(current_time):
                log_file.write(f"Session started at: {tracker.session_start}\n")
                print(f"Session started at: {tracker.session_start}")

                while not tracker.check_and_end_session(current_time, log_file):
                    time.sleep(1)
                    current_time = datetime.now()

                tracker.total_usage_today += (tracker.session_end - tracker.session_start)
                
            else:
                time.sleep(10)  # 10 seconds sleep

            if current_time.date() != tracker.session_start.date():
                tracker.total_usage_today = timedelta()
