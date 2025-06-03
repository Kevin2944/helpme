var express = require('express');
var router = express.Router();

const Ticket = require('../models/Ticket');

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/tickets", (req, res) => {
  const t1 = new Ticket(1, "Vladimir", new Date(), "Problème VSCode", "Un gros problème", "ouvert")

  res.render("ticketList", { t1: t1 });
});

module.exports = router;
