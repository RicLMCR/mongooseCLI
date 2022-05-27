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


// Add Movie or TV show
const app = async (yargsObj) => {
    if (yargsObj.addM) {
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
    else if (yargsObj.listM) {
        await listMovie();
    } else if(yargsObj.listTV){
        await listTV();
    }

// Update a movie or TV show  
    else if (yargsObj.updateM) {
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
    else if (yargsObj.deleteM) {
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

app(yargs.argv);

// COMMANDS - MOVIE
// Add movie: node src/app.js --addM --title "Star Wars"
// List movies: node src/app.js --listM
// Delete Movie: node src/app.js --deleteM --title "Star Wars"
// Update movie: node src/app.js --updateM --title "Spiderman" --newTitle "Batman"

// COMMANDS - TV
// Add TV show: node src/app.js --addTV --title "Obi Wan"
// List TV show: node src/app.js --listTV
// Delete TV show: node src/app.js --deleteTV --title "Obi Wan"
// Update TV show : node src/app.js --updateTV --title "Obi Wan" --newTitle "The Madelorian"