package com.aadityadesigners.laptopcontrol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AppRunner implements CommandLineRunner {

  @Autowired
  private Scheduler scheduler;

  @Override
  public void run(String... args) throws Exception {
    scheduler.schedule();
  }

}
