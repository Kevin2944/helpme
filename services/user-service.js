const User = require('../models/User');

const users = [
    new User("z@eni.fr", "Marc", "z", 1),
    new User("a@eni.fr", "Jean", "a", 1),
    new User("formateur", "formateur", "formateur", 2)
];

function findByUsernameAndPassword(username, password) {
    return users.find(u => u.username === username && u.password === password);
}

function findByUsername(username) {
    return users.find(u => u.username === username);
}

function findById(id) {
    return users.find(u => u.id === id);
}

module.exports = {
    findByUsernameAndPassword,
    findByUsername,
    findById
}