require("./db/connection"); // calls connection function immediately
const yargs = require("yargs"); // calls yargs to make commands simpler
const mongoose = require("mongoose");
const {
    addMovie,
    delMovie,
    updMovie,
    listMovie
} = require("./movie/functionsMov"); // Connects functions from 'functionsMov'

const {
    addTV,
    delTV,
    updTV,
    listTV
} = require("./TV/functionsTV");


// Movie commands
const app = async (yargsObj) => {
            //add movie ot TV show to db from yargs input
    if (yargsObj.add) {
        await addMovie({
            title: yargsObj.title,
            actor: yargsObj.actor
        });
    } else if (yargsObj.addTV){
        await addTV({
            title: yargsObj.title,
            actor: yargsObj.actor,
            season: yargsObj.season
        });
    }
    
    // Find movies or TV list
    else if (yargsObj.list) {
        await listMovie();
    } else if(yargsObj.listTV){
        await listTV();
    }

    // Update a movie        
    else if (yargsObj.update) {
        await updMovie({
            title: yargsObj.title,
            newTitle: yargsObj.newTitle
        });
    } else if(yargsObj.updateTV){
        await updTV({
            title: yargsObj.title,
            newTitle: yargsObj.newTitle
        });
    }
    
    // Delete a movie or TV show
    else if (yargsObj.delete) {
        await delMovie({
            title: yargsObj.title
        });
    } else if(yargsObj.deleteTV){
        await delTV({
            title: yargsObj.title
        });
    }
    
    // Catch entry error
    else {
        console.log("Incorrect command")
    }
    await mongoose.disconnect();
}

// TV commands



app(yargs.argv);

// COMMANDS - MOVIE
// Add movie: node src/app.js --add --title "Star Wars"
// List movies: node src/app.js --list
// Delete Movie: node src/app.js --delete --title "Star Wars"
// Update movie: node src/app.js --update --title "Spiderman" --newTitle "Batman"

// COMMANDS - TV
// Add TV show: node src/app.js --addTV --title "Obi Wan"
// List TV show: node src/app.js --listTV
// Delete TV show: node src/app.js --deleteTV --title "Obi Wan"
// Update TV show : node src/app.js --updateTV --title "Obi Wan" --newTitle "The Madelorian"