let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello World 2");
});
app.get("/version", (req, res) => {
  res.send("v3");
});

// host 0.0.0.0
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on http://localhost:${port}`);
});
