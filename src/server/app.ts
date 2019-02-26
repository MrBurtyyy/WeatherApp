import express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/hello", (req, res) => res.send("This is a hello world endpoint!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));