
| NOTE: App Certificates (as needed) |
```sh
$ openssl genrsa -out app1.adesigners.com.key 2048
$ openssl req -new -key app1.adesigners.com.key -out app1.adesigners.com.csr -subj "/C=IN/ST=Uttrakhand/L=Dehradun/O=Aaditya Designers Pvt. Ltd./OU=IT/CN=app1.adesigners.com"
$ openssl x509 -req -in app1.adesigners.com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out app1.adesigners.com.crt -days 500 -sha256 -extfile cert_config.txt -extensions v3_req
$ openssl pkcs12 -export -out app1.adesigners.com.pfx -inkey app1.adesigners.com.key -in app1.adesigners.com.crt -certfile rootCA.pem -passout pass:apple@26j
```






