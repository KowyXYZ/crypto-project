// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


contract Transactions {
    uint256 transactionCount;

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
    }

    TransferStruct[] transactions;

    function addToBlock(address payable _receiver, uint _amount) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, _receiver, _amount));
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns(uint256){
        return transactionCount;
    }
}