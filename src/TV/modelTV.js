// Database schema/structure to determine what data types and objects can be included
const mongoose = require ("mongoose");

//Create schema
const tvSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
        default: "Not specified"

    },
    season: {
        type: Number,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
})

const TVshow = mongoose.model("TVshow", tvSchema);

module.exports = TVshow;