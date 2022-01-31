const express = require("express")
const app = express()

app.get("/", (req,res) =>{
res.send("hello world")
})

app.listen(150, () => {
    console.log("en el puerto 150")
});
