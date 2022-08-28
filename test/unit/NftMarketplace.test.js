const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name) ? describe.skip : describe("NNft MArketplace Tests"),
 function () {
  let nftMarketplace, basicNft, deployer, player
  const PRICE = ethers.utils.parseEther("0.1")
  const TOKEN_ID = 0
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer
    player = (await getNamedAccounts()).player
    await deployments.fixture(["all"])
    nftMarketplace = await ethers.getContract("NftMarketplace")
    basicNft = await ethers.getContract("BasicNft")
    await basicNft.mintNft()
    await basicNft.approve(nftMarketplace.address, TOKEN_ID)
  })
}
