// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FractionalHouseOwnership {
    address public owner;

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can perform this action"
        );
        _;
    }

    struct House {
        uint houseId; // ID of the house
        uint originalPrice;
        mapping(address => uint) owners; //owners -> ownership
    }

    mapping(uint => House) public houses; // IDs -> House
    uint public houseCount;

    event HouseAdded(uint houseId, uint originalPrice);
    event OwnershipTransferred(
        uint houseId,
        address from,
        address to,
        uint percentage
    );

    function addHouse(uint _originalPrice) public onlyOwner {
        houseCount++;
        houses[houseCount].houseId = houseCount;
        houses[houseCount].originalPrice = _originalPrice;
        emit HouseAdded(houseCount, _originalPrice);
    }

    function buyOwnership(uint _houseId, uint _percentage) public payable {
        require(_houseId <= houseCount, "Invalid house ID");
        require(_percentage > 0 && _percentage <= 100, "Invalid percentage");
        require(msg.value > 0, "Invalid amount");

        House storage house = houses[_houseId];
        uint currentOwnership = house.owners[msg.sender];
        uint newOwnership = currentOwnership + _percentage;

        require(newOwnership <= 100, "Ownership percentage exceeds 100");

        house.owners[msg.sender] = newOwnership;

        if (currentOwnership == 0) {
            emit OwnershipTransferred(
                _houseId,
                address(0),
                msg.sender,
                _percentage
            );
        } else {
            emit OwnershipTransferred(
                _houseId,
                msg.sender,
                msg.sender,
                _percentage
            );
        }
    }

    function sellOwnership(uint _houseId, uint _percentage) public {
        require(_houseId <= houseCount, "Invalid house ID");
        require(_percentage > 0 && _percentage <= 100, "Invalid percentage");

        House storage house = houses[_houseId];
        uint currentOwnership = house.owners[msg.sender];
        uint newOwnership = currentOwnership - _percentage;

        require(newOwnership >= 0, "Insufficient ownership percentage");

        house.owners[msg.sender] = newOwnership;
        emit OwnershipTransferred(
            _houseId,
            msg.sender,
            address(0),
            _percentage
        );
    }

    function getOwnership(
        uint _houseId,
        address _address
    ) public view returns (uint) {
        require(_houseId <= houseCount, "Invalid house ID");
        return houses[_houseId].owners[_address];
    }
}
