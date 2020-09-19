const Thing = require("../models/thing.model")

//Find All
module.exports.findAllThings = (req, res) => {
    Thing.find().sort({petType: 'asc'})
        .then(allThings => res.json(allThings))
        .catch(err => res.json(err))
}

//Create New
module.exports.createThing = (req, res) => { 
    Thing.create(req.body)
        .then(newThing => res.json(newThing))
        .catch(err => res.status(400).json(err), console.log("______error_______-"))
}

//Find One
module.exports.findOneThing = (req, res) => {
    Thing.findOne({_id: req.params.id})
        .then(oneThing => res.json(oneThing))
        .catch(err => res.json(err))
}

//update One
module.exports.updateThing = (req, res) => {
    Thing.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedThing => res.json(updatedThing))
        .catch(err => res.status(400).json(err), console.log("______error_______-"))
}

//Delete One
module.exports.deleteThing = (req, res) => {
    Thing.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}