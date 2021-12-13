const express = require("express");

const personsController = require("../controller/persons");

const router = express.Router();

router.get("/", personsController.getPersons);
router.post("/", personsController.createPerson);
router.put("/:personId", personsController.updatePerson);
router.delete("/:personId", personsController.deletePerson);

module.exports = router;