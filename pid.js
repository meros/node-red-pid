// Declare PID class
class PID {
  // Declare PID constants
  constructor(Kp, Ki, Kd) {
    this.Kp = Kp; // Proportional gain
    this.Ki = Ki; // Integral gain
    this.Kd = Kd; // Derivative gain

    // Initialize loop variables
    this.error = 0;
    this.previousError = 0;
    this.integral = 0;
    this.derivative = 0;
    this.time = 0;
    this.previousTime = 0;
  }

  // PID loop function
  pidLoop(target, current) {
    // Get current time
    this.time = Date.now();

    // Calculate time constant
    const dt = this.time - this.previousTime;

    this.previousTime = this.time;

    // Calculate error value
    this.error = target - current;

    // Calculate integral value
    this.integral = this.integral + this.error * dt;

    // Calculate derivative value
    if (dt > 0) {
      this.derivative = (this.error - this.previousError) / dt;
    } else {
      this.derivative = 0;
    }

    // Calculate output value
    const output =
      this.Kp * this.error +
      this.Ki * this.integral +
      this.Kd * this.derivative;

    // Store error value and time for next iteration
    this.previousError = this.error;
    this.previousTime = this.time;

    // Return output value
    return output;
  }
}

// Export PID class
module.exports = PID;
