const ThingController = require("../controllers/thing.controller")

module.exports = app => {
    app.get("/api/things/", ThingController.findAllThings);
    app.get("/api/things/:id", ThingController.findOneThing);
    app.put("/api/things/:id/update/", ThingController.updateThing);
    app.post("/api/things/new/", ThingController.createThing);
    app.delete("/api/things/:id/delete/", ThingController.deleteThing);
}