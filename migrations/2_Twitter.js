const Twitter = artifacts.require("Twitter.sol");

module.exports = function(deployer, network) {
    return deployer
    .then(() => {
        console.log("Deploying Twitter on "+ network);
        return deployer.deploy(Twitter);
    })
    .then(() => {
        console.log("Successfully deployed --------------------");
    })
}