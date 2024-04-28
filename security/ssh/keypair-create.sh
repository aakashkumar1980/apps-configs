#!/bin/sh

# Define your passphrase and keys directory
PASSPHRASE="apple26j"
KEYS_DIR="./keys"
find $KEYS_DIR -type f -delete

echo "creating keypair..."
ssh-keygen -t rsa -m PEM -N "$PASSPHRASE" -f $KEYS_DIR/id_rsa_ec2

echo "setting permissions for the private key..."
mv $KEYS_DIR/id_rsa_ec2 $KEYS_DIR/id_rsa_ec2.pem -f
chmod 400 $KEYS_DIR/id_rsa_ec2.pem

echo "creating public key from the private key..."
openssl rsa -in $KEYS_DIR/id_rsa_ec2.pem -out $KEYS_DIR/id_rsa_ec2-decrypted.pem -passin pass:$PASSPHRASE

