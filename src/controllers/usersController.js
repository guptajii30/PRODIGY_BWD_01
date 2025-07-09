// Temporary in-memory storage
let users = {};

exports.getUsers = (req, res) => {
  res.json(Object.values(users));
};

exports.getUser = (req, res) => {
  const user = users[req.params.id];
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.createUser = (req, res) => {
  const id = require('uuid').v4();
  users[id] = { ...req.body, id };
  res.status(201).json(users[id]);
};

exports.updateUser = (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[req.params.id] = { ...users[req.params.id], ...req.body };
  res.json(users[req.params.id]);
};

exports.deleteUser = (req, res) => {
  if (!users[req.params.id]) {
    return res.status(404).json({ error: 'User not found' });
  }
  delete users[req.params.id];
  res.status(204).send();
};

exports.createUser = (req, res) => {
  // Add validation
  if (!req.body.name || !req.body.email || !req.body.age) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const id = require('uuid').v4();
  users[id] = { ...req.body, id };
  res.status(201).json(users[id]);
};