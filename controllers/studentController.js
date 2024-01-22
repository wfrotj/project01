import Student from "../models/Student.js";

async function getStudents(_req, res) {
  const persons = await Student.find({});

  return res.json(persons);
}

export default {
  getStudents,
};
