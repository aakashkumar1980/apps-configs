package com.aadityadesigners.laptopcontrol;

import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
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
    // ...

    String formattedDateTime = time.format(DateTimeFormatter.ofPattern("hh:mm (a) - dd/MMM/yyyy"));
    System.out.println(String.format("Current Time: %s, isWeekday: %s, isWeekend: %s", formattedDateTime,
        utils.isWeekday(time), utils.isWeekend(time)));

    /** MAIN LOGIC */
    LocalTime localTime = time.toLocalTime();
    if (utils.isWeekday(time)) {

    } else if (utils.isWeekend(time)) {
      LocalTime startTime = controlTimingsProperties.getWeekdays().getTimings().getStart();
      if (localTime.isAfter(startTime)) {

      } else {
        utils.printMessage("Its not time yet. Please wait until %s Hours:Minutes", startTime, localTime);
      }
    }
  }
}
