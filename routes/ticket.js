const express = require('express');
const router = express.Router();
const ticketService = require('../services/ticketsServices');

router.get(["/", "/tickets"], (req, res) => {
    const allTickets = ticketService.getAllTickets();

    res.render("ticket-list", { tickets: allTickets });
});

router.get("/add-ticket", (req, res) => {
    const user = req.session.user;

    if(user) {
        res.render("add-ticket");
    } else {
        res.render("custom-errors", { notLoggedIn: true });
    }
});

router.post("/add-ticket", (req, res) => {
    const author = req.session.user.username;
    const title = req.body.title;
    const description = req.body.description;
    const authorId = req.session.user.id;

    ticketService.addTicket(author, title, description, authorId);

    res.redirect("/ticket");
});

router.get("/ticket-detail/:id", (req, res) => {
    const ticket = ticketService.findById(req.params.id);

    res.render("ticket-detail", { ticket: ticket });
});

router.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const ticket = ticketService.deleteById(id);

    res.redirect("/ticket");
});

module.exports = router;