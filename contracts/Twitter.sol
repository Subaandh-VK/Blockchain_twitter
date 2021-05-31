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
    Tweet[] public tweets;


    // Event to notify
    event CreateTweet(uint256 tweetOwner, uint256 tweetId,uint256 tweetTime, string tweetMsg);
    event UpdateTweet(uint256 tweetId,uint256 tweetTime, string tweetMsg);
    event DeleteTweet(uint256 tweetOwner);
    
    mapping (uint256 => address) public tweetToOwner;
    mapping (address => uint256) tweetCount;


    /**
	 * @dev A function that creates new Tweet 
	 * @param owner The owners userId
	 * @param tweetMsg The tweet message he wishes to post
	 */    
    function _createTweet(uint256 owner, string memory tweetMsg) public {
        tweets.push(Tweet(owner, tweetId, block.timestamp, tweetMsg));
        tweetId = tweets.length;
        tweetToOwner[tweetId] = msg.sender;
        tweetCount[msg.sender] ++;

        emit CreateTweet(owner, tweetId, block.timestamp, tweetMsg);
	}
    
    /**
     * @dev A function that Reads new Tweet
     * @param owner The owners userId
     */ 
    function _readTweet(uint256 owner) public view returns (string memory){
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetOwner == owner) {
                return tweets[i].tweetMsg;
            }
        }
        return "Unable to read tweet";
    }

    /**
    * @dev A function that Updates an existing Tweet
    * @param owner The owner userid to be updated
    * @param tweetMsg The tweet message to be updated
     */ 
    function _updateTweet(uint256 owner, string memory tweetMsg) public {
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetOwner == owner) {
                tweets[i].tweetTime = block.timestamp;
                tweets[i].tweetMsg = tweetMsg;
                emit UpdateTweet(owner, block.timestamp, tweetMsg);
            }
        }
    }

    /**
    * @dev A function that Updates an existing Tweet
    * @param owner The owner userid to be updated
     */
    function _deleteTweet(uint256 owner) public {
        for (uint256 i = 0; i < tweets.length ; i++) {
            if (tweets[i].tweetOwner == owner) {
                tweetCount[msg.sender] -= 1;
                tweetToOwner[tweets[i].tweetId] = address(0);
                delete tweets[i];
                emit DeleteTweet(owner);
            }
        }
    }

    /**
    * @dev A function that Updates an existing Tweet
    * @param owner The owner userid to be updated
     */
    function getTweetsByOwner(address owner) external view returns(uint256[] memory) {
        uint256[] memory result = new uint256[](tweetCount[owner]);
        uint counter = 0;
        for (uint i = 0; i < tweets.length; i++) {
            if (tweetToOwner[i] == owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
}