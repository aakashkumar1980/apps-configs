import os
import time
from datetime import datetime, timedelta
from config_loader import load_config  # Importing the load_config function


class SessionTracker:
    def __init__(self, config):
      self.config = config
      self.system = config.get('system', 'unknown')
      self.total_usage_today = timedelta()  # Track total usage for the current day
      self.last_session_end = None  # Track when the last session ended

    def start_session(self, current_time):
      # New logic for starting a session based on current_time
      if self.is_within_allowed_time(current_time):
        # Check if the current time is after the last session end + break time
        break_duration = timedelta(hours=float(self.config["session"]["break"]))
        if self.last_session_end and current_time < self.last_session_end + break_duration:
            return False  # Still in break time

        # Check daily usage limit
        day_type = "weekend_holiday" if current_time.weekday() >= 5 else "weekday"
        max_daily_duration = timedelta(hours=float(self.config["day"][day_type]["max_duration"]))
        if self.total_usage_today >= max_daily_duration:
            return False  # Daily limit reached

        self.session_start = current_time
        max_duration_hours = float(self.config["session"]["max_duration"])
        self.session_end = self.session_start + timedelta(hours=max_duration_hours)
        return True
      return False

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
      while True:
        current_time = datetime.now()
        if tracker.start_session(current_time):
          log_file.write(f"Session started at: {tracker.session_start}\n")
          while current_time < tracker.session_end:
            time.sleep(1)
            current_time = datetime.now()
            # Additional code for logging and notifying

          tracker.total_usage_today += (tracker.session_end - tracker.session_start)
          tracker.last_session_end = tracker.session_end
          log_file.write(f"Session ended at: {tracker.session_end}\n")
          print("Session ended. Taking a break.")
        else:
          # Wait for some time before rechecking
          time.sleep(10)
          # time.sleep(60)  # Check every minute

        # Reset usage tracking at the end of the day
        if current_time.date() != tracker.session_start.date():
          tracker.total_usage_today = timedelta()

