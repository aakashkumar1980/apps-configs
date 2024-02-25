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

  public void printWaitMessage(LocalTime time1, LocalTime time2) {
    System.out.println(
        String.format("### Its not time yet. Please wait until %s Hours:Minutes", (time1.minusHours(time2.getHour()))));
  }

  public void printLogInTomorrowMessage() {
    System.out.println(
        String.format("### Its time to stop working. Please take a break and log-in tomorrow."));
  }

  public void printErrorMessage(String message) {
    System.out.println(
        String.format("### Error: %s", message));
  }
}
