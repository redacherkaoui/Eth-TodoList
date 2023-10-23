

const TodoList = artifacts.require("./TodoList.sol");

module.exports = function (deployer) {
  deployer.deploy(TodoList).then(() => {
    return TodoList.deployed();
  }).then((instance) => {
    instance.DebugMessage().on("data", (event) => {
      console.log("Debug:", event.args.message);
    });
  });
};
