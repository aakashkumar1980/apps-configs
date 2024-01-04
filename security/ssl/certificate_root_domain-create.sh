#!/bin/sh

find certificates -type f -delete
PASSPHRASE="apple@26j"
########################
### ROOT CERTIFICATE ###
########################
ROOT_CA_NAME="certificates/rootCA"
echo "creating $ROOT_CA_NAME Key & Certificate..."
openssl genrsa \
  -des3 \
  -passout pass:$PASSPHRASE \
  -out $ROOT_CA_NAME.key \
  4096

cp subj_template.conf temp_subj.conf
sed -i "s/{PLACEHOLDER}/Aaditya Designers Root CA/" temp_subj.conf
openssl req \
  -new \
  -x509 \
  -sha256 \
  -days 1095 \
  -key $ROOT_CA_NAME.key \
  -passin pass:$PASSPHRASE \
  -out $ROOT_CA_NAME.pem \
  -config temp_subj.conf
rm temp_subj.conf


###############################
### ADFS DOMAIN CERTIFICATE ###
###############################
DOMAIN_CA_NAME="certificates/adfs.adesigners.com"
echo "creating $DOMAIN_CA_NAME Domain Key, CSR & Certificates..."

openssl genrsa \
  -des3 \
  -passout pass:$PASSPHRASE \
  -out $DOMAIN_CA_NAME.key \
  4096

cp subj_template.conf temp_subj.conf
sed -i "s/{PLACEHOLDER}/Aaditya Designers Pvt. Ltd./" temp_subj.conf
openssl req \
  -new \
  -sha256 \
  -key $DOMAIN_CA_NAME.key \
  -passin pass:$PASSPHRASE \
  -out $DOMAIN_CA_NAME.csr \
  -config temp_subj.conf
rm temp_subj.conf

openssl x509 \
  -req \
  -in $DOMAIN_CA_NAME.csr \
  -CAcreateserial \
  -CA $ROOT_CA_NAME.pem \
  -CAkey $ROOT_CA_NAME.key \
  -passin pass:$PASSPHRASE \
  -out $DOMAIN_CA_NAME.crt \
  -days 365 \
  -sha256 \
  -extfile cert_config.txt \
  -extensions v3_req

openssl pkcs12 \
  -export \
  -inkey $DOMAIN_CA_NAME.key \
  -passin pass:$PASSPHRASE \
  -in $DOMAIN_CA_NAME.crt \
  -certfile $ROOT_CA_NAME.pem \
  -passout pass:$PASSPHRASE \
  -out $DOMAIN_CA_NAME.pfx




