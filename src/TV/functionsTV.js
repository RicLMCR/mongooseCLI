// Functions list for TV Shows
const TVshow = require("./modelTV.js");

// Add TV Show function
exports.addTV = async (tvObj) => {
    try {
        const response = await TVshow.create(tvObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

// List TV show function
exports.listTV = async (tvObj) => {
    try {
        const response = await TVshow.find();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

// Update TV show function
exports.updTV = async (tvObj) => {
    try {
        const response = await TVshow.findOneAndUpdate({
            title: tvObj.title
        }, {
            $set: {
                title: tvObj.newTitle,
            }
        }, {
            new: true
        });
    } catch (error) {
        console.log(error);
    }
}

// Delete TV show function
exports.delTV = async (tvObj)=>{
    try {
        const response = await TVshow.deleteOne(tvObj);
        console.log(response);
    } catch (error){
        console.log(error);
    }
}