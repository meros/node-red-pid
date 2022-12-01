const PID = require("./pid");

// Declare Node-RED node
module.exports = function (RED) {
  // Node-RED node constructor
  function PIDNode(config) {
    // Store node configuration
    RED.nodes.createNode(this, config);

    // Declare local variables
    const node = this;
    const target = config.target;
    const Kp = config.Kp;
    const Ki = config.Ki;
    const Kd = config.Kd;

    // Create PID object
    const pid = new PID(Kp, Ki, Kd);

    // Node-RED input event handler
    node.on("input", function (msg) {
      // Get current value from input message
      const current = msg.payload;

      // Run PID loop and get output value
      const output = pid.pidLoop(target, current);

      // Set output value in output message
      msg.payload = output;

      // Send output message
      node.send(msg);
    });
  }

  // Register Node-RED node
  RED.nodes.registerType("node-red-pid", PIDNode);
};
