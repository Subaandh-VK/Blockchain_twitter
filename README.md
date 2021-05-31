# Blockchain_twitter

Twitter application developed with solidity and deployed on the ropsten network.
Performs Create Read Update and Delete operations.

# Requirements

The .env file is required for deployement

```bash
ropsten_infura_apikey = "your API key of infura project"
ropsten_mnemonic = "your mnemonic address of the wallet provider"
```

# Docker commands

Launch docker

Run this command to check CRUD functionality.
``` bash
docker-compose -p cz-tests -f docker-compose.tests.yaml up
```

Run this command to deploy to ropsten network
``` bash
Run docker-compose -p cz-migrate -f docker-compose.migrate.yml up
```

# Run tests 

1. Run ganache-cli
``` bash
ganache-cli
```

``` bash
truffle test
```

# Deploy 

1. To deploy locally
``` bash
truffle migrate
```

2. To deploy on ropsten
``` bash
truffle migrare --network ropsten
```

# Troubleshoot

Check package.json for version requirements
Install missing packages using 

``` bash
npm install -g <package-name>
```

# Test Output 
``` bash 
Contract: Twitter
    Create Tweet
Create Tweet response:  BN { negative: 0, words: [ 5, <1 empty item> ], length: 1, red: null } Tweet test
      √ Create a new tweet from name (879ms)
Read Tweet return message:  Tweet test-Read
      √ Read a new tweet with id (1135ms)
      √ Update a new tweet with Message (1627ms)
      √ Delete a new tweet with Id (1639ms)
```
