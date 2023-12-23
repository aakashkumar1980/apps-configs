import json
from datetime import datetime


def load_config(file_path):
    """
    Loads and parses the configuration file.
    :param file_path: Path to the configuration file.
    :return: Parsed configuration as a dictionary.
    """
    with open(file_path, 'r') as file:
        config = json.load(file)
    
    # Additional parsing if needed (e.g., converting strings to datetime objects)
    parse_config(config)
    
    return config

def parse_config(config):
    """
    Parses and converts certain fields in the configuration for ease of use.
    :param config: Configuration dictionary.
    """
    for key in ["weekday", "weekend_holiday"]:
        if "cutoff_timings" in config["day"][key]:
            config["day"][key]["cutoff_timings"]["start"] = parse_time(config["day"][key]["cutoff_timings"]["start"])
            config["day"][key]["cutoff_timings"]["end"] = parse_time(config["day"][key]["cutoff_timings"]["end"])
        if "holiday_dates" in config["day"][key]:
            config["day"][key]["holiday_dates"] = [parse_date(date_str) for date_str in config["day"][key]["holiday_dates"]]

def parse_time(time_str):
    """
    Converts a time string to a datetime object.
    :param time_str: Time string in 'HH:MM' format.
    :return: datetime.time object.
    """
    return datetime.strptime(time_str, '%H:%M').time()

def parse_date(date_str):
    """
    Converts a date string to a datetime object.
    :param date_str: Date string in 'MM/DD/YYYY' format.
    :return: datetime.date object.
    """
    # Handling date ranges
    if ' to ' in date_str:
        start_date, end_date = date_str.split(' to ')
        return [datetime.strptime(start_date.strip(), '%m/%d/%Y').date(), 
                datetime.strptime(end_date.strip(), '%m/%d/%Y').date()]
    else:
        return datetime.strptime(date_str, '%m/%d/%Y').date()

# Example usage
if __name__ == "__main__":
    config = load_config('laptop-schedule.json')
    print(config)
