const mongoose = require('mongoose');

const MovieSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "youre title must be at least 3 charachters long"],
    },
    releaseDate: {
        type: Date,
        min: ['1930-01-01', 'minimum date for a movie is 1930'],
        max: [new Date(), 'you cannot enter a release date that happens in the future'],
    },
    rating: {
        type: String,
        required: [true, "Rating is required"],
        maxlength: [ 7, 'Ratings cannot be longer that 7 characters']
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        enum: ['Comedy','Horror', 'Action', 'Romance', 'Drama', 'Sci-Fi', 'Kung-Fu', 'Foreign', 'Cinema Verite', 'Exprimental' ]
    },
    watchLength: {
        type: Number,
        required: [true, "watch length is required"],
        min: [80, "to be a movie you must be at least 80 minutes long"],
        max: [ 240, 'You need to be able to stay away for the entire movie']
    },
    actors: {
        type: String,
        required: [true, "Actors is a required field"],
        minlength: [3, "youre name must be at least 3 charachters long"],
    },
    boxOffice: {
        type: Number,

    },
    coverArtUrl: {
        type: String,
        required: [true, "Cover Art i is required"],
        minlength: [3, "youre cover art url must be at least 15 characters long"],
    },
    imdbLink: {
        type: String,
    }
}, { timestamps: true });



module.exports = mongoose.model("Movie", MovieSchema);