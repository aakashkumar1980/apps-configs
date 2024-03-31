package com.aadityadesigners.laptopcontrol.configs;

import java.io.InputStream;
import java.net.URL;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

@Service
public class ConfigurationLoader {

  private final RestTemplate restTemplate;
  public ConfigurationLoader(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
  }

  public ControlTimingsProperties loadControlTimingsConfiguration(String url) throws Exception {
    InputStream inputStream = new URL(url).openStream();
    String yamlString = restTemplate.getForObject(url, String.class);
    Yaml yaml = new Yaml(new Constructor(ControlTimingsProperties.class));
    return yaml.loadAs(inputStream, ControlTimingsProperties.class);
  }
}
