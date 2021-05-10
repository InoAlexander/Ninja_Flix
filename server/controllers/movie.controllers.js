const Movie = require('../models/movie.model');
// controller will work with routes to make sure we match these things up using key value pairs as a new function.

module.exports = {
    getAll: (req, res) =>{
        Movie.find({})
            .then((allMovies) =>{
                console.log("in all movies");
                console.log(allMovies);
                res.json(allMovies);
            })
            .catch((err)=>{
                console.log("error found in getAll");
                res.json(err);
            })
    },
    create: (req, res) => {
        console.log(req.body);
        Movie.create(req.body)
            .then((newMovie) => {
                console.log('in create')
                console.log(newMovie);
                res.json(newMovie);
            })
            .catch((err)=>{
                console.log("error found in create");
                res.json(err);
            })
    },
    getOne: (req, res) =>{
        console.log(req.params.id);
        Movie.findById(req.params.id)
            .then((oneMovie) =>{
                console.log("in One Movie");
                console.log(oneMovie);
                res.json(oneMovie);
            })
            .catch((err)=>{
                console.log("error found in getOne");
                res.json(err);
            })
    },
    // needs to have req.body as well to update the entire document. 
    update: (req, res) =>{
        console.log(req.params.id, req.body);
        Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // new version not original
            runValidators:true, //by default mongoose will not validate on update
        })
            .then((updatedMovie) =>{
                console.log("in update Movie");
                console.log(updatedMovie);
                res.json(updatedMovie);
            })
            .catch((err)=>{
                console.log("error found in getOne");
                res.json(err);
            })
    },
    delete: (req, res) =>{
        console.log(req.params.id);
        Movie.findByIdAndDelete (req.params.id)
            .then((deletedMovie) =>{
                console.log("in delete Movie");
                console.log(deletedMovie);
                res.json(deletedMovie);
            })
            .catch((err)=>{
                console.log("error found in deleted movie");
                res.json(err);
            })
    },

}