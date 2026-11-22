const { ethers, network } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  if (!deployer) {
    throw new Error("Aucun compte : DEPLOYER_PRIVATE_KEY est vide ou invalide");
  }
  console.log("Deployer :", deployer.address);
  const factory = await ethers.getContractFactory("SimpleStorage");
  const c = await factory.deploy(42);
  await c.waitForDeployment();
  const addr = await c.getAddress();
  console.log(`SimpleStorage déployé sur ${network.name} : ${addr}`);
  if (network.name === "sepolia") {
    console.log(`Etherscan : https://sepolia.etherscan.io/address/${addr}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
