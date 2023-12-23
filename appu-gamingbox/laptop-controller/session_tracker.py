import os
import time
from datetime import datetime, timedelta
from config_loader import load_config  # Importing the load_config function


class SessionTracker:
    def __init__(self, config):
        self.config = config
        self.session_start = None
        self.session_end = None
        self.system = config.get('system', 'unknown')  # Added system attribute

    def start_session(self):
        """
        Start a new session based on the current system time.
        """
        now = datetime.now()
        print(f"Current time: {now}")
        if not self.is_within_allowed_time(now):
            next_start_time = self.calculate_next_start_time(now)
            self.notify_next_start_time(next_start_time)
            return False
        self.session_start = now
        self.calculate_session_end()
        return True

    def calculate_session_end(self):
        """
        Calculate when the current session should end based on the configuration.
        """
        max_duration_hours = float(self.config["session"]["max_duration"])
        self.session_end = self.session_start + timedelta(hours=max_duration_hours)

    # Updated Method: check_session_end with file logging
    def check_session_end(self, log_file):
        """
        Check if the current session should end and log to file.
        :param log_file: File object for logging.
        :return: True if the session should end, False otherwise.
        """
        if datetime.now() >= self.session_end:
            log_file.write(f"Session ended at: {datetime.now()}\n")
            return True
        return False

    def get_remaining_time(self):
        """
        Get the remaining time for the current session.
        :return: Remaining time in seconds.
        """
        remaining_time = self.session_end - datetime.now()
        return max(remaining_time.total_seconds(), 0)

    # New Method: is_within_allowed_time
    def is_within_allowed_time(self, current_time):
        """
        Check if the current time is within the allowed session time.
        :param current_time: datetime object of the current time.
        :return: True if within allowed time, False otherwise.
        """
        day_type = "weekend_holiday" if current_time.weekday() >= 5 else "weekday"
        start_time = self.config["day"][day_type]["cutoff_timings"]["start"]
        end_time = self.config["day"][day_type]["cutoff_timings"]["end"]

        return start_time <= current_time.time() <= end_time
    
    # New Method: calculate_next_start_time
    def calculate_next_start_time(self, current_time):
        """
        Calculate the next valid start time for a session.
        :param current_time: datetime object of the current time.
        :return: datetime object of the next start time.
        """
        day_type = "weekend_holiday" if current_time.weekday() >= 5 else "weekday"
        next_start_date = current_time.date()
        next_start_time = self.config["day"][day_type]["cutoff_timings"]["start"]

        if current_time.time() > next_start_time:
            next_start_date += timedelta(days=1)  # Move to the next day

        return datetime.combine(next_start_date, next_start_time)
    
    # New Method: notify_next_start_time
    def notify_next_start_time(self, next_start_time):
        """
        Notify the user of the next valid start time for a session.
        :param next_start_time: datetime object of the next start time.
        """
        message = f"Session cannot start now. Next available start time: {next_start_time}"
        if self.system == 'ubuntu':
            self.display_ubuntu_notification(message)
        elif self.system == 'windows':
            self.display_windows_notification(message)
        else:
            print(message)  # Default action
    def display_ubuntu_notification(self, message):
        # Implement Ubuntu-specific notification logic here
        os.system(f'notify-send "Laptop Usage Control" "{message}"')
    def display_windows_notification(self, message):
        # TODO: Implement Windows-specific notification logic here
        pass  # Placeholder for Windows notification implementation


# Example usage
if __name__ == "__main__":
    config = load_config('laptop-schedule.json')
    tracker = SessionTracker(config)
    session_started = tracker.start_session()

    # Determine path for the log file based on the OS
    if tracker.system == 'ubuntu':
        log_file_path = '/home/ubuntu/Documents/laptop-tracker.log'
    elif tracker.system == 'windows':
        # TODO: Update the path to the log file
        log_file_path = r'C:\Windows\System32\laptop-tracker.log'
    else:
        home_dir = os.path.expanduser('~')
        log_file_path = os.path.join(home_dir, 'laptop-tracker.log')    

    with open(log_file_path, 'a') as log_file:
        if session_started:
            log_file.write(f"Session started at: {tracker.session_start}\n")
            print(f"Session started at: {tracker.session_start}")
            print(f"Session will end at: {tracker.session_end}")

            while True:
                time.sleep(1)
                if tracker.check_session_end(log_file):
                    print("Session time is up!")
                    break
                else:
                    remaining_seconds = tracker.get_remaining_time()
                    print(f"Time remaining: {remaining_seconds} seconds")
        else:
            print("Session start time is not yet reached.")
