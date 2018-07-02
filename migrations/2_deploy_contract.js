var CLXToken = artifacts.require("./CLXToken.sol");
var CLXTokenSale = artifacts.require("./CLXTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(CLXToken);
  deployer.deploy(CLXTokenSale);
};
