const assert = require("assert");
const PID = require("./pid");

// Test the PID constructor
describe("PID", function () {
  it("should initialize the PID constants", function () {
    const pid = new PID(1, 2, 3);
    assert.equal(pid.Kp, 1);
    assert.equal(pid.Ki, 2);
    assert.equal(pid.Kd, 3);
  });
});

// Test the PID loop function
describe("pidLoop", function () {
  it("should calculate the output value based on the target and current values", function () {
    const pid = new PID(1, 2, 3);
    const output = pid.pidLoop(10, 5);
    assert.equal(output, 5);
  });
});
