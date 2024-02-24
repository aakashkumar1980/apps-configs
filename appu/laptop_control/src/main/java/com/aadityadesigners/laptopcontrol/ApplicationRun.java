package com.aadityadesigners.laptopcontrol;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.aadityadesigners.laptopcontrol.service.S3Service;

@Component
public class ApplicationRun implements CommandLineRunner {

  @Autowired
  private S3Service s3Service;

  @Override
  public void run(String... args) throws Exception {
    System.out.println("Listing files in S3 bucket");
    List<String> s3files = s3Service.listFilesInBucket("aakash.kumar-appu.laptopcontrol");
    for (String file : s3files) {
      System.out.println(file);
    }
  }

}
