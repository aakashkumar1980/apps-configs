package com.aadityadesigners.laptopcontrol.service;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.time.ZonedDateTime;

import org.springframework.stereotype.Component;

@Component
public class Utils {

  public Boolean isWeekend(ZonedDateTime dateTime) {
    DayOfWeek day = dateTime.getDayOfWeek();
    return day == DayOfWeek.SATURDAY || day == DayOfWeek.SUNDAY;
  }

  public Boolean isWeekday(ZonedDateTime dateTime) {
    return !isWeekend(dateTime);
  }

  public void printMessage(String message, LocalTime time1, LocalTime time2) {
    System.out.println(
        String.format(message, (time1.minusHours(time2.getHour()))));
  }
}
