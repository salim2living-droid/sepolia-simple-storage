require("@nomicfoundation/hardhat-toolbox");

const RPC = (process.env.SEPOLIA_RPC_URL || "").trim();
let KEY = (process.env.DEPLOYER_PRIVATE_KEY || "").trim();
if (KEY && !KEY.startsWith("0x")) KEY = "0x" + KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: RPC || "https://invalid.example",
      accounts: KEY ? [KEY] : [],
    },
  },
};
