const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.get("/", personController.getAllPerson);
router.post("/", personController.addNewPerson);
router.post("/edit/:id", personController.editPerson);
router.post("/update/:id", personController.updatePersonById);
router.post("/delete/:id", personController.deletePersonById);
module.exports = router;
