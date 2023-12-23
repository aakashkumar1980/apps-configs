import time
from datetime import datetime, timedelta
from config_loader import load_config  # Importing the load_config function


class SessionTracker:
    def __init__(self, config):
        self.config = config
        self.session_start = None
        self.session_end = None

    def start_session(self, test_start_time=None):
        """
        Start a new session. Optionally, a test start time can be provided.
        :param test_start_time: datetime object for when the session should start (for testing).
        """
        self.session_start = test_start_time if test_start_time else datetime.now()
        self.calculate_session_end()

    def calculate_session_end(self):
        """
        Calculate when the current session should end based on the configuration.
        """
        max_duration_hours = float(self.config["session"]["max_duration"])
        self.session_end = self.session_start + timedelta(hours=max_duration_hours)

    def check_session_end(self):
        """
        Check if the current session should end.
        :return: True if the session should end, False otherwise.
        """
        if datetime.now() >= self.session_end:
            return True
        return False

    def get_remaining_time(self):
        """
        Get the remaining time for the current session.
        :return: Remaining time in seconds.
        """
        remaining_time = self.session_end - datetime.now()
        return max(remaining_time.total_seconds(), 0)

# Example usage
if __name__ == "__main__":
    # For testing, you can set a manual start time. E.g.: datetime(year=2023, month=12, day=23, hour=15, minute=0)
    test_time = datetime(year=2023, month=12, day=22, hour=7, minute=30, second=0)  # Set to "None" to use the current system time

    config = load_config('laptop-schedule.json')  # Load the configuration
    tracker = SessionTracker(config)
    tracker.start_session(test_start_time=test_time)
    print(f"Session started at: {tracker.session_start}")
    print(f"Session will end at: {tracker.session_end}")

    # Example to check remaining time in a loop
    while True:
        time.sleep(1)  # Sleep for 1 second to avoid excessive CPU usage
        if tracker.check_session_end():
            print("Session time is up!")
            break
        else:
            print(f"Time remaining: {tracker.get_remaining_time()} seconds")
