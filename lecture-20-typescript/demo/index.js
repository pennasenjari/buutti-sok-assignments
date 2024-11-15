var input = process.argv;
var person = {
    firstname: "Heikki", // note: comma
    lastname: "Hela",
    age: 50,
    children: [],
    favoriteColor: "blue",
    favoriteGame: "Duke Nukem",
    steamId: 1, // Not mandatory
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
