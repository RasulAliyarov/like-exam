const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const Joi = require("joi")
const PORT = 8080

app.use(cors())
app.use(express.json())

// Joi
const CustomersJoi = Joi.object({
    name: Joi.string().required(),
    city: Joi.string().required(),
    desc: Joi.string().required()
})
// Shema
const CustomerShema = new mongoose.Schema({
    name: String,
    city: String,
    desc: String
})
//  Model
const CustomerModel = new mongoose.model("Customers", CustomerShema)
// Connect to Mongo DB
mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://RasulAliyarov:yhDM5vvDNiuCJT0K@cluster0.78j7miz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Connect to MongoDb"))
    .catch(error => console.log({ error: error }))



app.post('/api/customers/', (req, res, next) => {
    let { error } = CustomersJoi.validate(req.body)
    if (!error) next()

    else {
        const { details } = error
        const message = details.map(i => i.message).join(",")

        res.status(422).send({ Error: message })
    }
},
    (req, res) => {
        let newCustomer = new CustomerModel({
            ...req.body
        })

        newCustomer
            .save()
            .then(() => res.send({ message: "Customer successfuly add" }))
            .catch(error => res.status(500).send(error))
    }
)

app.delete("/api/customers/:id", (req, res) => {
    if (req.params.id) {
        CustomerModel.findByIdAndDelete(req.params.id, (error, data) => {
            if (error) return res.status(500).send(error)

            res.send(data)
        })
    }
})

app.get("/api/customers/", (req, res) => {
    CustomerModel.find(null, (error, data) => {
        if (error) return res.status(500).send(error)
        res.send(data)
    })
})

app.listen(PORT, () => {
    console.log("Server is up", PORT)
})