"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMoviesRoutes = setMoviesRoutes;
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const router = (0, express_1.Router)();
const moviesController = new moviesController_1.MoviesController();
function setMoviesRoutes(app) {
    app.get('/movies', moviesController.getAllMovies.bind(moviesController));
    app.get('/movies/:id', moviesController.getMovieById.bind(moviesController));
    app.post('/movies', moviesController.createMovie.bind(moviesController));
    app.put('/movies/:id', moviesController.updateMovie.bind(moviesController));
    app.delete('/movies/:id', moviesController.deleteMovie.bind(moviesController));
}
