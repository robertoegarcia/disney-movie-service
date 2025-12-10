import { Router } from 'express';
import { MoviesController } from '../controllers/moviesController';

const router = Router();
const moviesController = new MoviesController();

export function setMoviesRoutes(app: Router) {
    app.get('/movies', moviesController.getAllMovies.bind(moviesController));
    app.get('/movies/:id', moviesController.getMovieById.bind(moviesController));
    app.post('/movies', moviesController.createMovie.bind(moviesController));
    app.put('/movies/:id', moviesController.updateMovie.bind(moviesController));
    app.delete('/movies/:id', moviesController.deleteMovie.bind(moviesController));
}