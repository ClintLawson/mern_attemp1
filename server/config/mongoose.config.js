const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/exam1_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("Error when connecting Database...", err))
    