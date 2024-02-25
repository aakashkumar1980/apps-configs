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

  public void schedule() {
    // s3Service.listFilesInBucket(BUCKET_NAME);

    ZonedDateTime time = ZonedDateTime.now(ZoneId.of(ZONE_ID));
    String formattedDateTime = time.format(DateTimeFormatter.ofPattern("hh:mm (a) - dd/MMM/yyyy"));
    System.out.println(String.format("Current Time: %s, isWeekday: %s, isWeekend: %s", formattedDateTime,
        utils.isWeekday(time), utils.isWeekend(time)));

    /** MAIN LOGIC */
    LocalTime localTime = time.toLocalTime();
    if (utils.isWeekday(time)) {

    } else if (utils.isWeekend(time)) {
      LocalTime startTime = controlTimingsProperties.getWeekdays().getTimings().getStart();
      LocalTime endTime = controlTimingsProperties.getWeekdays().getTimings().getEnd();
      if (localTime.isAfter(startTime)) {
        // check if its time to stop working
        if (localTime.isAfter(endTime))
          utils.printLogInTomorrowMessage();

        String key = time.format(DateTimeFormatter.ofPattern("dd/MMM/yyyy"));
        String laptopUsageTime = s3Service.getValue(key, BUCKET_NAME, "laptopcontrol.properties");
        if (laptopUsageTime == null) {
          System.out.println("No usage time found for today");
          try {
            s3Service.addOrUpdateProperty(key, "0", BUCKET_NAME, "laptopcontrol.properties");
          } catch (IOException e) {
            e.printStackTrace();
            utils.printErrorMessage(e.getMessage());
          }

          // compute the usage time
        } else {

        }

      } else {
        utils.printWaitMessage(startTime, localTime);
      }
    }
  }
}
