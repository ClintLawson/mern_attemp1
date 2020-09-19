const express = require("express")
const cors = require("cors")

const app = express()

require("./server/config/mongoose.config")
app.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true })
)

const AllMyUserRoutes = require("./server/routes/thing.routes")
AllMyUserRoutes(app)

app.listen(8000, () => console.log("The server is ready on port 8000"))