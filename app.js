const express = require("express");
const app = express();

const { fork } = require("child_process");

app.get("/test", (req, res) => {
  try {
    const childProcess = fork("child.js");

    childProcess.on("message", (message) => {
      console.log(`Child process message: ${message}`);
    });

    childProcess.on("close", (code) => {
      console.log(`Child process exited with code ${code}`);
      return res.send("1st API Closed...");
    });
  } catch (error) {
    console.log("Timeout Intepreted...");
  }
});

app.get("/test1", (req, res) => {
  console.log("2nd API starts running...");
  res.send("Hello 2nd API");
  console.log("2nd API Completed...");
});

app.listen("3001", () => {
  console.log("Server is Running on PORT 3001");
});
