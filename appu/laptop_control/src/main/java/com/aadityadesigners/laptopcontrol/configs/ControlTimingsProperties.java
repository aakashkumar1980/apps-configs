package com.aadityadesigners.laptopcontrol.configs;

import lombok.Data;
import java.time.LocalTime;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "control-timings")
public class ControlTimingsProperties {
  private Sessions sessions;
  private Pahers pahers;

  @Data
  public static class Sessions {
    private int timeLimitMins;
    private int breakTimeMins;
    private int maxSessionsPerPaher;
  }

  @Data
  public static class Pahers {
    private Do doPaher;
    private Teesra teesra;
    private Chautha chautha;
    private Pancham pancham;

    @Data
    public static class Do {
      private Timings timings;
    }

    @Data
    public static class Teesra {
      private Timings timings;
    }

    @Data
    public static class Chautha {
      private Timings timings;
    }

    @Data
    public static class Pancham {
      private Timings timings;
    }

    @Data
    public static class Timings {
      private LocalTime start;
      private LocalTime end;
    }
  }
}
