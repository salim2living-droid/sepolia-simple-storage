const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let c, owner, other;

  beforeEach(async () => {
    [owner, other] = await ethers.getSigners();
    c = await (await ethers.getContractFactory("SimpleStorage")).deploy(42);
    await c.waitForDeployment();
  });

  it("initialise la valeur et le propriétaire", async () => {
    expect(await c.get()).to.equal(42n);
    expect(await c.owner()).to.equal(owner.address);
  });

  it("permet au propriétaire de modifier la valeur", async () => {
    await expect(c.set(7)).to.emit(c, "ValueChanged").withArgs(owner.address, 7n);
    expect(await c.get()).to.equal(7n);
  });

  it("refuse la modification par un autre compte", async () => {
    await expect(c.connect(other).set(1)).to.be.revertedWithCustomError(c, "NotOwner");
  });
});
