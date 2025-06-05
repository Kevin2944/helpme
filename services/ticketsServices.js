const Ticket = require('../models/Ticket');
const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../database/db');

const tickets = [
    new Ticket("Jean", "pb js", "les types js", 1),
    new Ticket("Anne", "Spring Boot", "java c'est compliqué", 2),
    new Ticket("Marc", "Erreur API", "Impossible d'appeler l'API depuis le front", 1),
    new Ticket("Lucie", "Bug CSS", "Les marges ne s'appliquent pas sur Firefox", 2),
    new Ticket("Sofia", "Connexion BDD", "Problème de driver avec PostgreSQL", 4),
    new Ticket("Nabil", "Node.js", "req.body est toujours undefined", 3)
];

function addTicket(author, title, description, authorId) {
    const ticket = new Ticket(author, title, description, authorId);

    tickets.push(ticket);
    return ticket;
}

function getAllTickets() {
    return tickets;
}

function findById(id) {
    const ticket = tickets.find(t => t.id == id);

    return ticket;
}

function deleteById(id) {
    const index = tickets.findIndex(t => t.id == id);

    if (index !== -1) {
        tickets.splice(index, 1);
        return true;
    }

    return false;
}

module.exports = {
    addTicket,
    getAllTickets,
    findById,
    deleteById
};
