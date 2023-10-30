#!/bin/sh

echo "CLEANING UP..."
# clean up
docker-compose down
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
#docker rmi $(docker images -q) -f
docker volume rm $(docker volume ls -q)
docker network rm $(docker network ls | grep "bridge\|none\|host" -v | awk '{print $1}')
docker system prune -a -f


echo "SETUP STARTING..."
# STEP 1: Start the docker containers
docker-compose up -d

# Give containers some time to fully start
sleep 30


# STEP 2: Set Vault Address
export VAULT_ADDR='http://localhost:9200'

# Login to Vault
vault login vaulttoken

# Enable the key/value secret engine
vault secrets enable -path=secret kv

# Store the MySQL credentials
vault kv put secret/springboot_template \
    spring.datasource.database=privatelearningv2 \
    spring.datasource.username=aakash.kumar \
    spring.datasource.password=apple26j

# Load the policy into Vault:
echo 'path "secret/data/application" {
    capabilities = ["read"]
}
path "secret/data/springboot_template" {
    capabilities = ["read"]
}
path "secret/metadata/" {
    capabilities = ["list"]
}' | vault policy write privatelearningv2-policy -

# Enable AppRole
vault auth enable approle

# Create AppRole and attach Policy
vault write auth/approle/role/privatelearningv2-role token_policies="privatelearningv2-policy"

# FETCH: ROLE & SECRET
vault read auth/approle/role/privatelearningv2-role/role-id
vault write -f auth/approle/role/privatelearningv2-role/secret-id




echo "SETUP COMPLETED!"
