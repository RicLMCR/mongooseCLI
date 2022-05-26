require("./db/connection"); // calls connection function immediately
const yargs = require("yargs"); // calls yargs to make commands simpler
const mongoose = require("mongoose");
const {
    addMovie,
    delMovie,
    updMovie,
    listMovie
} = require("./movie/functions");


const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to db from yargs input
        await addMovie({
            title: yargsObj.title,
            actor: yargsObj.actor
        }); // Calls addmvie function 
    } else if (yargsObj.list) {

        // Find movies list
        await listMovie();

    } else if (yargsObj.update) {
        // Update a movie
        await updMovie({
            title: yargsObj.title,
            newTitle: yargsObj.newTitle
        })
    } else if (yargsObj.delete) {
        // Delete a movie
        await delMovie({
            title: yargsObj.title
        });
    } else {
        console.log("Incorrect command")
    }
    await mongoose.disconnect();
}

app(yargs.argv);

// COMMANDS
// Add movie: node src/app.js --add --title "Star Wars"
// List movies: node src/app.js --list
// Delete Movie: node src/app.js --delete --title "Star Wars"
// Update movie: node src/app.js --update --title "Spiderman" --newTitle "Batman"