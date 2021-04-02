const app = require("./src/app")
const port = process.env.PORT || 3000
const mongoSchema = require("./src/mongoSchema")


app.listen(port, async () => {
    await mongoSchema.connect()
    console.log("started service on port " + port)
})