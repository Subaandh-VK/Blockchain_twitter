var abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetOwner",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "tweetMsg",
        "type": "string"
      }
    ],
    "name": "CreateTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetOwner",
        "type": "uint256"
      }
    ],
    "name": "DeleteTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "tweetMsg",
        "type": "string"
      }
    ],
    "name": "UpdateTweet",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tweetToOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tweets",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tweetOwner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tweetTime",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "tweetMsg",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "tweetMsg",
        "type": "string"
      }
    ],
    "name": "_createTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      }
    ],
    "name": "_readTweet",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "tweetMsg",
        "type": "string"
      }
    ],
    "name": "_updateTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      }
    ],
    "name": "_deleteTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "getTweetsByOwner",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];