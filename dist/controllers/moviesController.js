"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
class MoviesController {
    constructor() {
        this.movies = [];
    }
    getAllMovies(req, res) {
        res.json(this.movies);
    }
    getMovieById(req, res) {
        const movieId = parseInt(req.params.id);
        const movie = this.movies.find(m => m.id === movieId);
        if (movie) {
            res.json(movie);
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
    createMovie(req, res) {
        const newMovie = req.body;
        this.movies.push(newMovie);
        res.status(201).json(newMovie);
    }
    updateMovie(req, res) {
        const movieId = parseInt(req.params.id);
        const index = this.movies.findIndex(m => m.id === movieId);
        if (index !== -1) {
            this.movies[index] = { ...this.movies[index], ...req.body };
            res.json(this.movies[index]);
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
    deleteMovie(req, res) {
        const movieId = parseInt(req.params.id);
        const index = this.movies.findIndex(m => m.id === movieId);
        if (index !== -1) {
            this.movies.splice(index, 1);
            res.status(204).send();
        }
        else {
            res.status(404).send('Movie not found');
        }
    }
}
exports.MoviesController = MoviesController;
