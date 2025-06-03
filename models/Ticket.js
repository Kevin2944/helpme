class Ticket {
    constructor(id, author, creation_date, title, description, state) {
        this.id = id,
        this.author = author,
        this.creation_date = creation_date,
        this.title = title,
        this.description = description,
        this.state = state
    }

    getDisplayTicket() {
        return `id: ${this.id}, auteur: ${this.author}, date: ${this.creation_date}, titre: ${this.title}, description: ${this.description}, état: ${this.state}`;
    }
}

module.exports = Ticket;