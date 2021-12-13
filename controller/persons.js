const PersonModel = require("../models/Person");

const getPersons = async (req, res, next) => {
  const persons = await PersonModel.find();
  return res.json({ persons });
};

const createPerson = async (req, res, next) => {
  const { fname, lname, email, phone } = req.body;
  if (!fname || fname.length === 0)
    return res.json({ success: false, message: "First name is required" });

  if (!lname || lname.length === 0)
    return res.json({ success: false, message: "Last name is required" });

  if (lname.length <= 5)
    return res.json({
      success: false,
      message: "Last name should be more than 5 char long",
    });

  if (!email || email.length === 0)
    return res.json({
      success: false,
      message: "Email is required",
    });

  const person = await PersonModel.create({
    fname,
    lname,
    email,
    phone,
  });
  return res.json({success: true, person});
};

const updatePerson = async (req, res, next) => {
    const personId = req.params.personId;

    const person = await PersonModel.findById(personId);

    if (!person)
      return res.json({ success: false, message: "Person does not exist" });

    person.fname = req.body.fname;
    person.lname = req.body.lname;
    person.email = req.body.email;
    person.phone = req.body.phone;
    await person.save();

    // const updatedPerson = await PersonModel.findByIdAndUpdate(personId, req.body, {new:true})

    return res.json({success: true, person})
}

const deletePerson = async (req, res, next) => {
    const personId = req.params.personId;

    const person = await PersonModel.findById(personId);

    if (!person)
      return res.json({ success: false, message: "Person does not exist" });

    await PersonModel.findByIdAndDelete(personId);

    return res.json({success: true, message: 'Person deleted successfully'})
}

module.exports = {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
