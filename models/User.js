let idCounter = 1;

class User {
    constructor(username, name, password, role) {
        if (!username || username.length > 50 || !/^[a-z0-9@.]+$/i.test(username)) throw new Error("Le nom d'utilisateur est obligatoire, alphanumérique, 50 caractères max");
        if (!name || name.length > 50 || !/^[a-z0-9]+$/i.test(name)) throw new Error("Le nom est obligatoire, alphanumérique, 50 caractères max");
        if (!password || password.length > 50 || !/^[a-z0-9]+$/i.test(password)) throw new Error("Le mot de passe est obligatoire, alphanumérique, 50 caractères max");

        this.id = idCounter++;
        this.username = username;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}

module.exports = User;