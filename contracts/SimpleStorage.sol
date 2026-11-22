// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title SimpleStorage
/// @notice Contrat simple : stocke une valeur, réservé au propriétaire pour l'écriture.
contract SimpleStorage {
    address public owner;
    uint256 private value;

    event ValueChanged(address indexed by, uint256 newValue);

    error NotOwner();

    constructor(uint256 initialValue) {
        owner = msg.sender;
        value = initialValue;
        emit ValueChanged(msg.sender, initialValue);
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    function set(uint256 newValue) external onlyOwner {
        value = newValue;
        emit ValueChanged(msg.sender, newValue);
    }

    function get() external view returns (uint256) {
        return value;
    }
}
