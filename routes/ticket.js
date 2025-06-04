const express = require('express');
const router = express.Router();
const ticketService = require('../services/ticketsServices')

router.get(["/", "/tickets"], (req, res) => {
    const allTickets = ticketService.getAllTickets();

    res.render("ticket-list", { tickets: allTickets });
});

router.get("/add-ticket", (req, res) => {
    res.render("add-ticket");
});

router.post("/add-ticket", (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description;

    ticketService.addTicket(author, title, description);

    res.redirect("/ticket");
});

module.exports = router;