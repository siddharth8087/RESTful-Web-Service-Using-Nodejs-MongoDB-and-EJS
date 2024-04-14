const Person = require("../model/personModel");

const getAllPerson = async (req, res) => {
  try {
    const result = await Person.find();
    res.render("index", { data: result });
  } catch (error) {
    console.error("Error fetching all persons:", error);
    res.status(500).send("Internal Server Error");
  }
};

const addNewPerson = async (req, res) => {
  try {
    const { name, age, gender, mobileNumber } = req.body;
    const person = new Person({
      name,
      age,
      gender,
      mobileNumber,
    });
    const result = await person.save();
    res.redirect("/person");
  } catch (error) {
    console.error("Error adding new person:", error);
    res.status(500).send("Internal Server Error");
  }
};

const editPerson = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Person.findById(id);
    if (!result) {
      return res.status(404).send("Person not found");
    }
    res.render("edit", { data: result });
  } catch (error) {
    console.error("Error editing person:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updatePersonById = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const result = await Person.findByIdAndUpdate(id, updates);
    res.redirect("/person");
  } catch (error) {
    console.error("Error updating person:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deletePersonById = async (req, res) => {
  try {
    const id = req.params.id;
    await Person.findByIdAndDelete(id);
    res.redirect("/person");
  } catch (error) {
    console.error("Error deleting person:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllPerson,
  addNewPerson,
  editPerson,
  updatePersonById,
  deletePersonById,
};
