async function getPersons(req, res) {
  const persons = await Person.find({});

  return res.json(persons);
}
