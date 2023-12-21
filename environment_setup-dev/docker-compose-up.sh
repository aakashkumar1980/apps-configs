#!/bin/sh

echo "SETUP STARTING..."
# Start the docker containers
docker-compose up -d
# Give containers some time to fully start
sleep 30


# ##### #
# VALUT #
# ##### #
# Set Vault Address
export VAULT_ADDR='http://localhost:9200'

# Login to Vault
vault login vaulttoken

# SECRET-ENGINE:
# Check if the secret engine is already enabled
if ! vault secrets list | grep -q '^secret/'; then
    # Enable the key/value secret engine if not already enabled
    vault secrets enable -path=secret kv
else
    echo "KV secrets engine already enabled at path 'secret'"
fi

# POLICY:
# Load the policy into Vault:
echo 'path "secret/data/application" {
    capabilities = ["read"]
}
path "secret/metadata/" {
    capabilities = ["list"]
}

path "secret/data/springboot_template" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/common" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/common/auth0" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/common/auth0_enterprise" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/common/cognito" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/auth0" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/auth0_enterprise" {
    capabilities = ["read"]
}
path "secret/data/springboot_template/cognito" {
    capabilities = ["read"]
}
' | vault policy write privatelearningv2-policy -


# ROLE:
# Enable AppRole
vault auth enable approle

# Create AppRole and attach Policy
vault write auth/approle/role/privatelearningv2-role token_policies="privatelearningv2-policy"

# FETCH: ROLE & SECRET
ROLE_ID=$(vault read auth/approle/role/privatelearningv2-role/role-id)
ROLE_ID_VALUE=$(echo $ROLE_ID | awk '/role_id/ {print $6}')
echo "ROLE_ID=$ROLE_ID"
SECRET_ID=$(vault write -f auth/approle/role/privatelearningv2-role/secret-id)
SECRET_ID_VALUE=$(echo $SECRET_ID | grep "secret_id " | awk '{print $6}')
echo "SECRET_ID=$SECRET_ID"
sed -i "s/^VAULT_ROLE_ID=.*/VAULT_ROLE_ID=$ROLE_ID_VALUE/" "../../oauth2-resource-server-webstorage/.env" 
sed -i "s/^VAULT_SECRET_ID=.*/VAULT_SECRET_ID=$SECRET_ID_VALUE/" "../../oauth2-resource-server-webstorage/.env" 


# STORE THE CREDENTIALS #
vault kv put secret/springboot_template/common \
    spring.datasource.database=privatelearningv2 \
    spring.datasource.username=aakash.kumar \
    spring.datasource.password=apple26j

vault kv put secret/springboot_template/auth0 \
    spring.security.oauth2.resourceserver.jwt.issuer-uri=https://dev-3atdqio6bouv8swb.us.auth0.com/ \
    spring.security.oauth2.resourceserver.jwt.audience=albums-identifier
vault kv put secret/springboot_template/auth0_enterprise \
    spring.security.oauth2.resourceserver.jwt.issuer-uri=https://dev-8r5puiwt4gcv3eps.us.auth0.com/ \
    spring.security.oauth2.resourceserver.jwt.audience=albums-identifier

vault kv put secret/springboot_template/cognito \
    spring.security.oauth2.resourceserver.jwt.issuer-uri=https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_9oQRKbQXQ \
    spring.security.oauth2.resourceserver.jwt.audience=albums-identifier



# ############### #
# SAMPLE REST API #
# ############### #
# REF: https://dev.to/millankaul/run-restful-apis-service-using-docker-b68
IMAGE_NAME=sample-rest-api-docker:latest
PORT=$(jq '.[0].APPS_TEMPLATES.BACKEND_SAMPLE_REST_API_TODO' ../SERVER-PORTS.json)
if docker image inspect ${IMAGE_NAME} >/dev/null 2>&1; then
  echo "Docker image exists. starting the server..."
  docker run -p ${PORT}:8080 -d ${IMAGE_NAME}
else
  echo "Docker image does not exist. Creating docker image and starting the server..."
  cd sample-rest-api-docker
  docker build . -t ${IMAGE_NAME}
  docker run -p ${PORT}:8080 -d ${IMAGE_NAME}
fi


echo "SETUP COMPLETED!"
