const Ticket = require('../models/Ticket');

const tickets = [];

function addTicket(author, title, description) {
    const ticket = new Ticket(author, title, description);
    
    tickets.push(ticket);
    return ticket;
}

function getAllTickets() {
    return tickets;
}

module.exports = {
    addTicket,
    getAllTickets
};
