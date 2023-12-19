import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("Choo Choo! Welcome to your Express app 🚅");
});

// app.get("/json", (req, res) => {
//   res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
// });


// app.post("/post", (req, res) => {
//   res.json({ "Choo Choo": "Welcome to your Express app 🚅", body: req.body });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
