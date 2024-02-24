package com.aadityadesigners.laptopcontrol.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class S3Service {

  private final AmazonS3 amazonS3;

  public S3Service(AmazonS3 amazonS3) {
    this.amazonS3 = amazonS3;
  }

  public List<String> listFilesInBucket(String bucketName) {
    ListObjectsV2Request req = new ListObjectsV2Request().withBucketName(bucketName);
    ListObjectsV2Result result;

    List<String> fileNames;

    do {
      result = amazonS3.listObjectsV2(req);

      fileNames = result.getObjectSummaries().stream()
          .map(S3ObjectSummary::getKey)
          .collect(Collectors.toList());

      String token = result.getNextContinuationToken();
      req.setContinuationToken(token);
    } while (result.isTruncated());

    return fileNames;
  }
}
