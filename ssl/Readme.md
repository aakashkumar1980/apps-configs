These are the Internal certificates within the organization.


## ROOT Certificate
```sh
$ openssl genrsa -out rootCA.key 4096
$ openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem -subj "/C=IN/ST=Uttrakhand/L=Dehradun/O=Aaditya Designers Pvt. Ltd./OU=IT/CN=Aaditya Designers Root CA"
```

## ADFS certificate
```sh
$ openssl genrsa -out adfs.adesigners.com.key 2048
$ openssl req -new -key adfs.adesigners.com.key -out adfs.adesigners.com.csr -subj "/C=IN/ST=Uttrakhand/L=Dehradun/O=Aaditya Designers Pvt. Ltd./OU=IT/CN=adfs.adesigners.com"
$ openssl x509 -req -in adfs.adesigners.com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out adfs.adesigners.com.crt -days 500 -sha256 -extfile cert_config.txt -extensions v3_req
$ openssl pkcs12 -export -out adfs.adesigners.com.pfx -inkey adfs.adesigners.com.key -in adfs.adesigners.com.crt -certfile rootCA.pem -passout pass:apple@26j
```
<br/>
<br/>

| NOTE: App Certificates (as needed) |
```sh
$ openssl genrsa -out app1.adesigners.com.key 2048
$ openssl req -new -key app1.adesigners.com.key -out app1.adesigners.com.csr -subj "/C=IN/ST=Uttrakhand/L=Dehradun/O=Aaditya Designers Pvt. Ltd./OU=IT/CN=app1.adesigners.com"
$ openssl x509 -req -in app1.adesigners.com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out app1.adesigners.com.crt -days 500 -sha256 -extfile cert_config.txt -extensions v3_req
$ openssl pkcs12 -export -out app1.adesigners.com.pfx -inkey app1.adesigners.com.key -in app1.adesigners.com.crt -certfile rootCA.pem -passout pass:apple@26j
```






