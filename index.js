const express = require("express")

const app = express()

app.get("/endpoint", async (req, res) => {
    res.json({ message: "Hello, world!" });
})

app.listen(process.env.PORT, async() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})