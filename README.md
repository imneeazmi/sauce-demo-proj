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
![cypress-gui](https://user-images.githubusercontent.com/22928748/191924139-dac60123-bd38-40a6-9f7c-dbf3eab3aee9.png)
8. Choose Chrome as your browser --> click "Start E2E Testing in Chrome"
![chrome-browser](https://user-images.githubusercontent.com/22928748/191924281-f87bb8a7-0dbf-472d-8a74-7f189a41669f.png)
9. The project will open in a new Chrome window, and the test cases are on-display. In order to run them, click on any of the test cases
![run-test-case-cypress](https://user-images.githubusercontent.com/22928748/191924731-2ecfaa99-d3b9-4dca-b911-63d47a6238e5.png)
10. The test will run and you can also view the output on Cypress <br />
![test-out-cypress](https://user-images.githubusercontent.com/22928748/191925032-7ff27b99-0c1b-4d65-80a1-0ab65f13e79c.png)
