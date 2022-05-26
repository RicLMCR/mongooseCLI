// Database schema/structure to determine what data types and objects can be included
const mongoose = require ("mongoose");

//Create schema
const movieSchema = new mongoose.Schema({ //Define key value pairs
    title: { // Criteria/structure for our database
        type: String,
        unique:true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    }
});

// Give this schema to a model to enforce on our DB
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;