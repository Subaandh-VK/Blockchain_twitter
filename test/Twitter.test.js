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
            
            console.log("-----------Starting : "+firstTweet.tweetOwner+" "+ firstTweet.tweetMsg+"----------Ending");
            firstTweet.tweetMsg.should.equal("Tweet test");

            console.log("<<<<<<<-0------" +this.Twitter.tweets.length+ "-------0-->>>>>>>>");
        });
    });
    
    describe("Read Tweet", () => {
        it("Read a new tweet with id", async() => {
            this.Twitter._createTweet(5 ,"Tweet test");
            firstTweet = await this.Twitter.tweets.call([0]);

            this.Twitter._readTweet(5);
            readTweet = await this.Twitter.tweets.call([0]);
            console.log("-----------Starting : "+readTweet.tweetMsg+"----------Ending");
            
            console.log("Owner Id:"+ readTweet.tweetOwner);
            console.log("tweetId:"+readTweet.tweetId);
            console.log("tweetMessage:"+readTweet.tweetMsg);
            
            // console.log("<<<<<<<-0------" +this.Twitter.tweets.length+ "-------0-->>>>>>>>");

        });
    });

    describe("Delete Tweet", () => {
        it("Delete a new tweet with Id", async() => {
            this.Twitter._createTweet(2, "Tweet test");
            // cTweet = await this.Twitter.tweets.call([0]);

            // console.log("*******************************************")
            this.Twitter._deleteTweet(2)
            delTweet = await this.Twitter.tweets.call([0]);
            // console.log("-----------Starting : "+delTweet.tweetOwner+"----------Ending");
            delTweet.tweetMsg.should.equal('');
        });
    });

    describe("Update Tweet", () => {
        it("Update a new tweet with Message", async() => {
            this.Twitter._createTweet(5, "Tweet test");
            firstTweet = await this.Twitter.tweets.call([0]);

            this.Twitter._updateTweet(5, "Tweet Change");
            firstTweet = await this.Twitter.tweets.call([0]);
            // console.log("-----------Starting : "+firstTweet.tweetId, firstTweet.tweetMsg+"----------Ending");
            firstTweet.tweetMsg.should.equal("Tweet Change");
        });
    });
});