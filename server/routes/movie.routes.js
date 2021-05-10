const MovieController = require('../controllers/movie.controllers');
//---------------DO NOT FORGET:------------
// brew servicessstart mongodb-community@4.4
module.exports = function(app) {
    app.get('/api/movies', MovieController.getAll);
    app.get('/api/movies/:id', MovieController.getOne);

    app.put('/api/movies/:id', MovieController.update);

    app.delete('/api/movies/:id', MovieController.delete);

    app.post('/api/movies', MovieController.create);
    

}