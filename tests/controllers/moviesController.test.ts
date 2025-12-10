import { MoviesController } from '../../src/controllers/moviesController';
import { mockRequest, mockResponse } from 'jest-mock-req-res';

const moviesController = new MoviesController();

describe('MoviesController', () => {
    it('should get all movies', () => {
        const req = mockRequest();
        const res = mockResponse();
        moviesController.getAllMovies(req, res);
        expect(res.json).toHaveBeenCalled();
    });

    it('should get a movie by id', () => {
        // Add a movie first
        moviesController['movies'].push({ id: '1', title: 'Test Movie', releaseDate: '2023-01-01', genre: 'Animation' });
        const req = mockRequest({ params: { id: '1' } });
        const res = mockResponse();
        moviesController.getMovieById(req, res);
        expect(res.json).toHaveBeenCalledWith({ id: '1', title: 'Test Movie', releaseDate: '2023-01-01', genre: 'Animation' });
    });

    it('should create a movie', () => {
        const req = mockRequest({ body: { id: '1', title: 'New Movie', releaseDate: '2023-01-01', genre: 'Animation' } });
        const res = mockResponse();
        moviesController.createMovie(req, res);
        expect(res.json).toHaveBeenCalled();
    });

    it('should update a movie', () => {
        const req = mockRequest({ params: { id: '1' }, body: { title: 'Updated Movie' } });
        const res = mockResponse();
        moviesController.updateMovie(req, res);
        expect(res.json).toHaveBeenCalled();
    });

    it('should delete a movie', () => {
        const req = mockRequest({ params: { id: '1' } });
        const res = mockResponse();
        moviesController.deleteMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
    });
});