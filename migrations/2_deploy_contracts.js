var VotingBFU = artifacts.require("./VotingBFU.sol");

module.exports = function(deployer) {
  deployer.deploy(VotingBFU, ['Penev', 'Drajev', 'Mihailov'], {gas: 6700000});
};