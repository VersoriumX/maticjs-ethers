// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    event YourEventName(string indexed arg1, uint256 indexed arg2);

    function emitEvent(string memory _arg1, uint256 _arg2) public {
        emit YourEventName(_arg1, _arg2);
    }
}
