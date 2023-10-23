// contracts/TodoList.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    uint public taskCount = 0;

    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(uint id, string content, bool completed);
    event DebugMessage(string message); // Define the DebugMessage event

    constructor() {
        taskCount = 0; // Set taskCount to 0 before the require statement
        require(taskCount < 100, "Too many tasks created");
        emit DebugMessage("Constructor called");
        createTask("Sample Task");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }
}
