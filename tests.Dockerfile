FROM node:16-alpine3.11

WORKDIR /usr/src/app

COPY package*.json./ ./
RUN npm install && npm install -g truffle@5.1.59 && npm install --save-dev chai && npm install dotenv && npm install @truffle/hdwallet-provider && npm install web3

COPY . .

CMD ["truffle", "test"]
