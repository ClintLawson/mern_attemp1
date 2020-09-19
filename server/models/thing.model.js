const mongoose = require("mongoose")

const ThingSchema = new mongoose.Schema({
    petName : {
        type: String,
        required: [
            true,
            "Name required"
        ],
        minlength: [
            3,
            "Name must be at least 3 characters long!"
        ],
    },
    petType:  {
        type: String,
        required: [
            true,
            "Type required"
        ],
        minlength: [
            3,
            "Type must be at least 3 characters long!"
        ]
    },
    petDescription:  {
        type: String,
        required: [
            true,
            "Description required"
        ],
        minlength: [
            3,
            "Description must be at least 3 characters long!"
        ]
    },
    skill1 : String,
    skill2 : String,
    skill3 : String
}, {timestamps: true})

const Thing = mongoose.model("Thing", ThingSchema)

module.exports = Thing