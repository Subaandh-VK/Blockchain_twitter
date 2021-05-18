// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


contract Twitter {
    struct Tweet {
        uint256 tweetOwner;
        uint256 tweetId;
        uint256 tweetTime;
        string tweetMsg;
    }

    uint256 tweetId;
    uint256 totalTweets;
    Tweet[] public tweets;

    // Event to notify
    event CreateTweet(uint256 tweetOwner, uint256 tweetId,uint256 tweetTime, string tweetMsg);
    event ReadTweet(uint256 tweetOwner, uint256 tweetId,uint256 tweetTime, string tweetMsg);
    event UpdateTweet(uint256 tweetId,uint256 tweetTime, string tweetMsg);
    event DeleteTweet(uint256 tweetOwner);
    
    mapping (uint256 => address) public tweetOwner;
    mapping (address => uint) public tweetCount;

    function _createTweet(uint256 Owner, string memory tweetMsg) public {
        tweets.push(Tweet(Owner, tweetId, block.timestamp, tweetMsg));
        tweetId == tweets.length - 1;
        tweetOwner[tweetId] = msg.sender;
        tweetCount[msg.sender] ++;
        totalTweets++;

        emit CreateTweet(Owner, tweetId, block.timestamp, tweetMsg);
	}

    function _readTweet(uint256 OwnerId) public {
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetId == tweetId) {
                emit ReadTweet(OwnerId, tweets[i].tweetId, tweets[i].tweetTime, tweets[i].tweetMsg);       
            }
        }
    }

    function _updateTweet(uint256 ownerId, string memory tweetMsg) public {
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetOwner == ownerId) {
                tweets[i].tweetTime = block.timestamp;
                tweets[i].tweetMsg = tweetMsg;
                emit UpdateTweet(ownerId, block.timestamp, tweetMsg);
            }
        }
    }

    function _deleteTweet(uint256 ownerId) public {
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetOwner == ownerId) {

                tweetCount[msg.sender] -= 1;
                tweetOwner[tweets[i].tweetId] = address(0);
                delete tweets[i];
                totalTweets--;
                emit DeleteTweet(ownerId);
            }
        }
    }

}