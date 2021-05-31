require("chai").should();

const Twitter = artifacts.require("Twitter");

contract("Twitter", function([user0, user1, admin, registereduser]){
    beforeEach(async ()=> {
        this.Twitter = await Twitter.new();
    });

    describe("Create Tweet", () => {
        it("Create a new tweet from name", async() => {
            this.Twitter._createTweet(5 ,"Tweet test")
            firstTweet = await this.Twitter.tweets.call([0]);
            
            console.log("Create Tweet response: ",firstTweet.tweetOwner,firstTweet.tweetMsg);
            firstTweet.tweetMsg.should.equal("Tweet test");
        });

        it("Read a new tweet with id", async() => {
            ret = await this.Twitter._createTweet(5 ,"Tweet test-Read");
            firstTweet = await this.Twitter.tweets.call([0]);
            
            readTweet = await this.Twitter._readTweet(5);
            console.log("Read Tweet return message: ", readTweet);
            readTweet.should.equal("Tweet test-Read");
        });

        it("Update a new tweet with Message", async() => {
            updateTweet = await this.Twitter._createTweet(5, "Tweet test");

            updateTweet = await this.Twitter._updateTweet(5, "Tweet Change");
            updateTweet = await this.Twitter.tweets.call([0]);

            updateTweet.tweetMsg.should.equal("Tweet Change");
        });

        it("Delete a new tweet with Id", async() => {
            deleteTweet = await this.Twitter._createTweet(2, "Tweet test");

            deleteTweet = await this.Twitter._deleteTweet(2)
            
            deleteTweet = await this.Twitter.tweets.call([0]);
            deleteTweet.tweetMsg.should.equal('');
        });
    });    
});