# sauce-demo-proj
Cypress saucedemo.com Automation Test Cases

# What is this?
This is a sample test automation framework for www.saucedemo.com.  SauceDemo is a sample website built by SauceLabs that allows users to practice browser automation.

# What do these tests cover?
These tests cover many test cases such as signing in/out, adding items to the cart, and checking out.

# What isn't tested?
Layout issues, sessions, cookies, APIs, etc.

# What do I need to run this project?
In order to run the project, follow the installation steps below:
1. Launch a terminal
2. Clone project with GitHub repo URL
3. Run the following command: npm install --save-dev cypress@10.8.0
4. Verify that npm is installed by running: npm -version
5. Go to the cloned project's path
6. Run the following command to launch Cypress: npx cypress open
7. Once the GUI is loaded --> select "E2E Testing" and click on the module
8. Choose Chrome as your browser --> click "Start E2E Testing in Chrome"
9. You will see the project test cases. In order to run them, click on any
