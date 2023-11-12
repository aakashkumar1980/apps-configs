#!/bin/sh

echo "SETUP STARTING..."
# Start the docker containers
docker-compose up -d
# Set Vault Address
export VAULT_ADDR='http://localhost:9200'
# Give containers some time to fully start
sleep 30


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
path "secret/data/springboot_template" {
    capabilities = ["read"]
}
path "secret/metadata/" {
    capabilities = ["list"]
}' | vault policy write privatelearningv2-policy -

# ROLE:
# Enable AppRole
vault auth enable approle

# Create AppRole and attach Policy
vault write auth/approle/role/privatelearningv2-role token_policies="privatelearningv2-policy"

# FETCH: ROLE & SECRET
vault read auth/approle/role/privatelearningv2-role/role-id
vault write -f auth/approle/role/privatelearningv2-role/secret-id



# ##################### #
# STORE THE CREDENTIALS #
# ##################### #
vault kv put secret/springboot_template \
    spring.datasource.database=privatelearningv2 \
    spring.datasource.username=aakash.kumar \
    spring.datasource.password=apple26j


echo "SETUP COMPLETED!"
