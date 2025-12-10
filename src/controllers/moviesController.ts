import { Request, Response } from 'express';
import { Movie } from '../models/movie';

export class MoviesController {
    private movies: Movie[] = [];

    public getAllMovies(req: Request, res: Response): void {
        res.json(this.movies);
    }

    public getMovieById(req: Request, res: Response): void {
        const movieId = req.params.id;
        const movie = this.movies.find(m => m.id === movieId);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).send('Movie not found');
        }
    }

    public createMovie(req: Request, res: Response): void {
        const newMovie: Movie = req.body;
        this.movies.push(newMovie);
        res.status(201).json(newMovie);
    }

    public updateMovie(req: Request, res: Response): void {
        const movieId = req.params.id;
        const index = this.movies.findIndex(m => m.id === movieId);
        if (index !== -1) {
            this.movies[index] = { ...this.movies[index], ...req.body };
            res.json(this.movies[index]);
        } else {
            res.status(404).send('Movie not found');
        }
    }

    public deleteMovie(req: Request, res: Response): void {
        const movieId = req.params.id;
        const index = this.movies.findIndex(m => m.id === movieId);
        if (index !== -1) {
            this.movies.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).send('Movie not found');
        }
    }
}