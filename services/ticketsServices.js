const Ticket = require('../models/Ticket');
const { getDb } = require('../database/db');

async function addTicket(author, title, description, authorId) {
    const db = getDb();

    const ticket = new Ticket(author, title, description, authorId);

    await db.collection('tickets').insertOne(ticket);
}

async function getAllTickets() {
    const db = getDb();

    return await db.collection('tickets').find().toArray();
}

async function findById(id) {
    const db = getDb();

    const ticket = await db.collection('tickets').findOne({ id });

    return ticket;
}

async function deleteById(id) {
    const db = getDb();

    await db.collection('tickets').deleteOne({ id });
}

module.exports = {
    addTicket,
    getAllTickets,
    findById,
    deleteById
};
