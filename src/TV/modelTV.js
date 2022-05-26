// Database schema/structure to determine what data types and objects can be included
const mongoose = require ("mongoose");

const tvSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    Actor: {
        type: String,

    },
    Seasons: {
        type: Number,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
          }
    },
})

const tvShow = mongoose.model("tvShow", tvSchema);

module.exports = tvShow;