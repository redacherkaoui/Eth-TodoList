const Web3 = require('web3');

// Connect to an Ethereum provider
const web3 = new Web3('http://localhost:7545');

// Replace 'YourContractABI' with your smart contract's ABI (as an array)
const YourContractABI = [
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "DebugMessage",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "name": "TaskCreated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_content",
                    "type": "string"
                }
            ],
            "name": "createTask",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "taskCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "tasks",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "content",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "completed",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

// Replace '0xYourContractAddress' with your smart contract's address
const YourContractAddress = '0x1f1e5F56431238f8F962436D94a18505404261B9';

// Function to create a task
async function createTask(description) {
    const contractInstance = new web3.eth.Contract(
        [
            [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "message",
                            "type": "string"
                        }
                    ],
                    "name": "DebugMessage",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "content",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "bool",
                            "name": "completed",
                            "type": "bool"
                        }
                    ],
                    "name": "TaskCreated",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "_content",
                            "type": "string"
                        }
                    ],
                    "name": "createTask",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "taskCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "tasks",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "content",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "completed",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        ],
        '0x1f1e5F56431238f8F962436D94a18505404261B9');
    const accounts = await web3.eth.getAccounts();

    try {
        await contractInstance.methods.createTask(description).send({
            from: accounts[0],
        });
        console.log('Task added successfully');
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

// Event listener for adding a task
document.getElementById("create-task").addEventListener("click", function () {
    const taskDescription = document.getElementById("task-input").value;
    if (taskDescription) {
        createTask(taskDescription);
    }
});
