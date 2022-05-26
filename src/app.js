require("./db/connection"); // calls connection function immediately
const yargs = require("yargs"); // calls yargs to make commands simpler
const mongoose = require("mongoose");
const {
    addMovie,
    delMovie,
    updMovie,
    listMovie
} = require("./movie/functionsMov");


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
// Add movie: node src/app.js --addM --title "Star Wars"
// List movies: node src/app.js --listM
// Delete Movie: node src/app.js --deleteM --title "Star Wars"
// Update movie: node src/app.js --updateM --title "Spiderman" --newTitle "Batman"