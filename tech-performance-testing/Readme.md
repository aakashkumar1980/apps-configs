# MongoDB Setup

## EC2 Instance Provisioning
Install EC2 machine having <i>Amazon Linux</i> and run the below commands.
```sh
$ sudo yum update -y
$ sudo yum install docker -y
$ sudo service docker start
$ sudo systemctl enable docker
$ docker pull mongo
``` 

## MongoDb Instance Provisioning
```sh
$ sudo docker run --name mongodbV2 -v /home/ec2-user/mongodb:/data/db -d --restart unless-stopped -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=apple26j mongo
```

## PROMOTHEUS + GRAFANA Installation

### Promothues
#### IAM Role
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeRegions"
      ],
      "Resource": "*"
    }
  ]
}
```
#### Config file (~/prometheus-grafana/prometheus/prometheus.yml)
```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'ec2'
    ec2_sd_configs:
      - region: '<aws-region>'
        access_key: '<access-key>'
        secret_key: '<secret-key>'
    relabel_configs:
      - source_labels: [__meta_ec2_public_ip]
        target_label: __address__
        replacement: '${1}:9100'
``` 

#### Docker Container
Since we are going to use the volume mount, therefore first find the userid used internally by prometheus.
```sh
$ docker run --rm -it --entrypoint=id prom/prometheus
```
Then, use this user (e.g. 65534) to change the ownership of your data directory.
```sh
$ sudo chown -R 65534:65534 ~/prometheus-grafana/prometheus/data
```

Finally, run the docker container
```sh
$ docker run -d \
  -p 9090:9090 \
  -v ~/prometheus-grafana/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml \
  -v ~/prometheus-grafana/prometheus/data:/prometheus \
  --name prometheus \
  --restart unless-stopped \
  prom/prometheus
```


### Grafana
#### Docker Container
Since we are going to use the volume mount, therefore first find the userid used internally by prometheus.
```sh
$ docker run --rm -it --entrypoint=id grafana/grafana
```
Then, use this user (e.g. 472) to change the ownership of your data directory.
```sh
$ sudo chown -R 472:472 ~/prometheus-grafana/grafana/data
```

Finally, run the docker container
```sh
$ docker run -d \
  -p 3000:3000 \
  -v ~/prometheus-grafana/grafana/data:/var/lib/grafana \
  --name grafana \
  --restart unless-stopped \
  grafana/grafana
```


## Client EC2s
```sh
$ https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz

$ tar xvfz node_exporter-1.7.0.linux-amd64.tar.gz
$ sudo cp -r node_exporter-1.7.0.linux-amd64 /usr/local/bin

$ sudo nano /etc/systemd/system/node_exporter.service
  [Unit]
  Description=Node Exporter
  Wants=network-online.target
  After=network-online.target

  [Service]
  User=nobody
  ExecStart=/usr/local/bin/node_exporter-1.7.0.linux-amd64/node_exporter

  [Install]
  WantedBy=multi-user.target

$ sudo systemctl daemon-reload
$ sudo systemctl start node_exporter
$ sudo systemctl enable node_exporter

```