const express = require("express");
const app = express();
const port = process.env.PORT || '3000';

app.get("/", (req, res) => {
    res.send("We are finished with this tutorial!");
});

app.get("/chuck", (req, res) => {
    res.send("Chuck Norris is the be(a)st!");
});

app.get("/chuck2", (req, res) => {
    res.send("Chuck Norris can start fire with a magnifying glass - at night!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});