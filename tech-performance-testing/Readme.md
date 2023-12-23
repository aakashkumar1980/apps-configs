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

## Docker Instance Provisioning
```sh
$ sudo docker run --name mongodbV2 -v /home/ec2-user/mongodb:/data/db -d --restart unless-stopped -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=apple26j mongo
```
