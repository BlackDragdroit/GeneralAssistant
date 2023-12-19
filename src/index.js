import express from "express";
import * as brain from "brainjs";
// import * as ml5 from "ml5";
import * as fs from "file-system";
import * as d3 from "d3";

const app = express();

app.get("/", (req, res) => {
  const nn = new brain.NeuralNetwork({ hiddenLayers: [3, 4] });

  const trainingData = [
    { input: { r: 255, g: 25, b: 255 }, output: { white: 1 } },
    { input: { r: 255, g: 255, b: 25 }, output: { black: 1 } },
    { input: { r: 255, g: 255, b: 255 }, output: { white: 1 } },
    { input: { r: 25, g: 55, b: 255 }, output: { black: 1 } },
    { input: { r: 25, g: 255, b: 25 }, output: { white: 1 } },
  ];

  nn.train(trainingData);

  res.send(nn.run({ r: 25, g: 255, b: 205 }));
});

// app.get("/json", (req, res) => {
//   res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
// });

// app.post("/post", (req, res) => {
//   res.json({ "Choo Choo": "Welcome to your Express app 🚅", body: req.body });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Assistant listening on port ${port}`);
});
