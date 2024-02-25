package com.aadityadesigners.laptopcontrol;

import java.io.IOException;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aadityadesigners.laptopcontrol.configs.ControlTimingsProperties;
import com.aadityadesigners.laptopcontrol.service.S3Service;
import com.aadityadesigners.laptopcontrol.service.Utils;
import java.time.format.DateTimeFormatter;

@Component
public class Scheduler {

  @Autowired
  private Utils utils;
  @Autowired
  private S3Service s3Service;
  @Autowired
  private ControlTimingsProperties controlTimingsProperties;

  private static final String ZONE_ID = "America/Phoenix";
  private static final String BUCKET_NAME = "aakash.kumar-appu.laptopcontrol";
  private static final String LAPTOPCONTROL_PROPERTIES = "laptopcontrol.properties";

  public void schedule() {
    ZonedDateTime time = ZonedDateTime.now(ZoneId.of(ZONE_ID));
    String formattedDateTime = time.format(DateTimeFormatter.ofPattern("hh:mm (a) - dd/MMM/yyyy"));
    System.out.println(String.format("Current Time: %s, isWeekday: %s, isWeekend: %s", formattedDateTime,
        utils.isWeekday(time), utils.isWeekend(time)));

    /** MAIN LOGIC */
    LocalTime localTime = time.toLocalTime();
    if (utils.isWeekday(time)) {
      LocalTime startTime = controlTimingsProperties.getWeekdays().getTimings().getStart();
      LocalTime endTime = controlTimingsProperties.getWeekdays().getTimings().getEnd();
      Integer totalTimeLimitHour = controlTimingsProperties.getWeekdays().getTotalTimeLimitHr();
      process(time, localTime, startTime, endTime, totalTimeLimitHour);

    } else if (utils.isWeekend(time)) {
      LocalTime startTime = controlTimingsProperties.getWeekendsHolidays().getTimings().getStart();
      LocalTime endTime = controlTimingsProperties.getWeekendsHolidays().getTimings().getEnd();
      Integer totalTimeLimitHour = controlTimingsProperties.getWeekendsHolidays().getTotalTimeLimitHr();
      process(time, localTime, startTime, endTime, totalTimeLimitHour);
    }
  }

  private void process(
      ZonedDateTime time, LocalTime localTime, LocalTime startTime, LocalTime endTime,
      Integer totalTimeLimitHour) {

    if (localTime.isAfter(startTime)) {
      // time ended
      if (localTime.isAfter(endTime))
        utils.printLogInTomorrowMessage();

      String key = time.format(DateTimeFormatter.ofPattern("dd/MMM/yyyy"));
      Double laptopUsageTimeInMins = Double.valueOf(s3Service.getValue(key, BUCKET_NAME, LAPTOPCONTROL_PROPERTIES));
      if (laptopUsageTimeInMins == null) {
        initiateUsageTracking(key);

      } else {

        if (laptopUsageTimeInMins > (totalTimeLimitHour * 60.0)) {
          utils.printLogInTomorrowMessage();
          updateUsageTracking(key, String.format("%.2f", laptopUsageTimeInMins / 60.0));
        } else {

        }
      }

    } else {
      utils.printWaitMessage(startTime, localTime);
    }
  }

  /** PRIVATE UTILS */
  private void initiateUsageTracking(String key) {
    System.out.println("### No usage time found for today");
    try {
      s3Service.addOrUpdateProperty(key, "0", BUCKET_NAME, LAPTOPCONTROL_PROPERTIES);
    } catch (IOException e) {
      e.printStackTrace();
      utils.printErrorMessage(e.getMessage());
    }
  }

  private void updateUsageTracking(String key, String usageTimeInHour) {
    System.out.println(String.format("### Updating tracking time %s for today", usageTimeInHour));
    try {
      s3Service.addOrUpdateProperty(key, usageTimeInHour, BUCKET_NAME, LAPTOPCONTROL_PROPERTIES);
    } catch (IOException e) {
      e.printStackTrace();
      utils.printErrorMessage(e.getMessage());
    }
  }
}
