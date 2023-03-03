const express = require("express");
const port = 3030;
const cors = require("cors");
const app = express();
const fs = require("fs");

const menus = require('./routes/menu.route.js')

app.use(cors());
app.use(express.json());
app.use('/api', menus)

app.use("/api", (req, res) => {
    res.json({ message: "Welcome to API" })
})


app.listen(port, () => console.log("Server is running"));
