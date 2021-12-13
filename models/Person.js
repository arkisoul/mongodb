const mongoose = require("mongoose");

const { Schema } = mongoose;

/**
 * Mongoose Data Types
 * String ~ string
 * Number ~ number
 * Date ~ Date
 * Boolean ~ boolean
 * Embedded Documents
 *
 * Refer https://mongoosejs.com/docs/schematypes.html for the complete list
 */

const personSchema = new Schema({
  fname: {type: String, required: true},
  lname: {
    type: String,
    required: true,
    validate: { 
        message: 'Last name length should be greather than 5 charachters',
        validator: (value) => value.length > 5
    },
  },
  email: {type: String, required: true},
  phone: {type: String}
});

const Person = mongoose.model('Person', personSchema)

module.exports = Person;
