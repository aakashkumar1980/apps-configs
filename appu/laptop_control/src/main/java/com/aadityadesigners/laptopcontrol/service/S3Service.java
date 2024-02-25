package com.aadityadesigners.laptopcontrol.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class S3Service {

  private final AmazonS3 amazonS3;

  public S3Service(AmazonS3 amazonS3) {
    this.amazonS3 = amazonS3;
  }

  /*
   * public List<String> listFilesInBucket(String bucketName) {
   * ListObjectsV2Request req = new
   * ListObjectsV2Request().withBucketName(bucketName);
   * ListObjectsV2Result result;
   * 
   * List<String> fileNames;
   * 
   * do {
   * result = amazonS3.listObjectsV2(req);
   * 
   * fileNames = result.getObjectSummaries().stream()
   * .map(S3ObjectSummary::getKey)
   * .collect(Collectors.toList());
   * 
   * String token = result.getNextContinuationToken();
   * req.setContinuationToken(token);
   * } while (result.isTruncated());
   * 
   * return fileNames;
   * }
   */

  public String getValue(String key, String bucketName, String propertyFile) {
    Properties properties;
    try {
      properties = loadProperties(bucketName, propertyFile);
      return properties.getProperty(key);
    } catch (IOException e) {
      e.printStackTrace();
    }
    return null;
  }

  public void addOrUpdateProperty(
      String key, String value,
      String bucketName, String propertyFile) throws IOException {

    Properties properties = loadProperties(bucketName, propertyFile);
    if (properties.containsKey(key)) {
      properties.setProperty(key, value);
    } else {
      properties.setProperty(key, value);
    }
    saveProperties(bucketName, propertyFile, properties);
  }

  private Properties loadProperties(String bucketName, String propertyFile) throws IOException {
    S3Object s3Object = amazonS3.getObject(new GetObjectRequest(bucketName, propertyFile));
    Properties properties = new Properties();
    try (InputStream input = s3Object.getObjectContent()) {
      properties.load(input);
    }
    return properties;
  }

  private void saveProperties(
      String bucketName, String propertyFile,
      Properties properties) throws IOException {

    ByteArrayOutputStream output = new ByteArrayOutputStream();
    properties.store(output, null);
    amazonS3.putObject(
        new PutObjectRequest(bucketName, propertyFile, new ByteArrayInputStream(output.toByteArray()), null));
  }

}
