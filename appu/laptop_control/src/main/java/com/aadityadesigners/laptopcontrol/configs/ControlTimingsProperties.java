package com.aadityadesigners.laptopcontrol.configs;

import java.time.LocalTime;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Data
@Configuration
@ConfigurationProperties(prefix = "control-timings")
public class ControlTimingsProperties {

  private Sessions sessions;
  private Weekdays weekdays;
  private WeekendsHolidays weekendsHolidays;

  @Data
  public static class Sessions {
    private int timeLimitMins;
    private int breakTimeMins;
  }

  @Data
  public static class Weekdays {
    private int totalTimeLimitHr;
    private Timings timings;
  }

  @Data
  public static class WeekendsHolidays {
    private int totalTimeLimitHr;
    private Timings timings;
  }

  @Data
  public static class Timings {
    private LocalTime start;
    private LocalTime end;
  }

}
