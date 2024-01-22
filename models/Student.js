/* eslint-disable linebreak-style */
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  section: {
    type: String,
  },
});

personSchema.set("toJSON", {
  transform: function (document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
