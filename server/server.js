const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const PORT = 8080

app.use(cors)
app.use(express.json())

const CostumerShema = new mongoose.Schema({
    name: String,
    city: String,
    desc: String
})

const CostumerModel = mongoose.model("Costumers", CostumerShema)

mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://RasulAliyarov:yhDM5vvDNiuCJT0K@cluster0.78j7miz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Connect to MongoDB"))
    .catch((error) => console.error(error))


app.get("/api/costumer", (req, res) => {
    console.log("salam");
});


app.listen(PORT, (req, res) => {
    console.log("Server is up", PORT)
})