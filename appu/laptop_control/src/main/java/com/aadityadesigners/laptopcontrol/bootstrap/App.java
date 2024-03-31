package com.aadityadesigners.laptopcontrol.bootstrap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

import com.aadityadesigners.laptopcontrol.configs.ControlTimingsProperties;

@EnableConfigurationProperties(ControlTimingsProperties.class)
@ComponentScan(basePackages = "com.aadityadesigners.laptopcontrol")
@SpringBootApplication
public class App {

  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }

}
