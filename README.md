# 🎛️ @meros/node-red-pid

Node-RED node that uses a PID (proportional-integral-derivative) controller to calculate an output value based on a target value and a current value.

## 📦 Installation

1. Install the `@meros/node-red-pid` package from the `npm` registry:

``npm install @meros/node-red-pid``

2. Restart Node-RED for the changes to take effect.

## 🚀 Usage

1. Drag the `@meros/node-red-pid` node from the function category onto the workspace.
2. Double-click the node to open its properties.
3. Configure the node with the desired settings:
   - **Name:** The name of the node, which appears in the node label.
   - **Target:** The target value for the PID controller.
   - **Kp:** The proportional gain constant for the PID controller.
   - **Ki:** The integral gain constant for the PID controller.
   - **Kd:** The derivative gain constant for the PID controller.
   - **minOutput:** The minimum output value allowed.
   - **maxOutput:** The maximum output value allowed.
4. Connect the node to other nodes in the flow.
5. Deploy the flow to see the PID controller in action.

## 📄 License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for more details.
