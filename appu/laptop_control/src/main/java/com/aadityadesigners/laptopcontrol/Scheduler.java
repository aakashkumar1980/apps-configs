package com.aadityadesigners.laptopcontrol;

import com.aadityadesigners.laptopcontrol.configs.ConfigurationLoader;
import com.aadityadesigners.laptopcontrol.configs.ControlTimingsProperties;
import com.aadityadesigners.laptopcontrol.service.Utils;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Scheduler {

  @Autowired
  private Utils utils;

  @Autowired
  private ConfigurationLoader configurationLoader;

  private static final String ZONE_ID = "America/Phoenix";
  private static final String TEMP_PATH = "";
  private static final String LAPTOPCONTROL_PROPERTIES = "laptopcontrol.properties";

  public void schedule() throws Exception {
    ZonedDateTime time = ZonedDateTime.now(ZoneId.of(ZONE_ID));
    String formattedDateTime = time.format(DateTimeFormatter.ofPattern("hh:mm (a) - dd/MMM/yyyy"));
    System.out.println(
        String.format("### Current Time: %s, isWeekday: %s, isWeekend: %s", formattedDateTime,
            utils.isWeekday(time), utils.isWeekend(time)));

    ControlTimingsProperties controlTimingsConfig = configurationLoader.loadControlTimingsConfiguration("https://raw.githubusercontent.com/aakashkumar1980/apps-configs/main/appu/laptop_control-timings.yml");
    System.out.println("### Control Timings: " + controlTimingsConfig);

    /** MAIN LOGIC */
    LocalTime localTime = time.toLocalTime();
  }
}
