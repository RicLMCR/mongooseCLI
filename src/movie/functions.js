// Effect the mpvie part of my database
const {
    findOne
} = require("./model");
const Movie = require("./model");

// Add movie function
exports.addMovie = async (movieObj) => { // async as this is outside of appliocation so we have to await it
    try {
        const response = await Movie.create(movieObj); // Creates database entry and attempts to save and pass it to DB
        console.log(response); //  Saves data base entry after checking contrainst have been adhered to
    } catch (error) {
        console.log(error);
    }
};

// List movie function
exports.listMovie = async () => {
    try {

        const response = await Movie.find();
        console.log(response)
    } catch {
        console.log(error)
    };
}


// Update movie function
exports.updMovie = async (movieObj) => {
    try {
        const response = await Movie.findOneAndUpdate({
                title: movieObj.title
            }, {
                $set: {
                    title: movieObj.newTitle,
                }
            }, {
                new: true
            } // Returns update in the command line - not original
        );
        console.log(response);
    } catch (error) {
        console.log(`2 ${error}`)
    }
}

// Delete movie function
exports.delMovie = async (movieObj) => {
    try {
        const response = await Movie.deleteOne(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};