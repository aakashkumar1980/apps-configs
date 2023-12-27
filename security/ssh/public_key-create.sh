#!/bin/sh
echo "creating keypair..."
ssh-keygen -t rsa -N 'apple26j' -f id_rsa_ec2

mv id_rsa_ec2 id_rsa_ec2.pem -f
chmod 400 id_rsa_ec2.pem

openssl rsa -in id_rsa_ec2.pem -out id_rsa_ec2-decrypted.pem -passin pass:apple26j
