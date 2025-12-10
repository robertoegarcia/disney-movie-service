import request from 'supertest';
import app from '../../src/app';
import { Movie } from '../../src/models/movie';

describe('Movies Routes', () => {
  let movieId: string;

  beforeAll(async () => {
    const newMovie: Movie = {
      id: '1',
      title: 'The Lion King',
      releaseDate: '1994-06-15',
      genre: 'Animation',
    };

    const response = await request(app).post('/movies').send(newMovie);
    movieId = response.body.id;
  });

  afterAll(async () => {
    await request(app).delete(`/movies/${movieId}`);
  });

  it('should get all movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a movie by id', async () => {
    const response = await request(app).get(`/movies/${movieId}`);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('The Lion King');
  });

  it('should create a new movie', async () => {
    const newMovie: Movie = {
      id: '2',
      title: 'Toy Story',
      releaseDate: '1995-11-22',
      genre: 'Animation',
    };

    const response = await request(app).post('/movies').send(newMovie);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Toy Story');
  });

  it('should update a movie', async () => {
    const updatedMovie = {
      title: 'The Lion King (Remastered)',
      releaseDate: '2019-07-19',
      genre: 'Animation',
    };

    const response = await request(app).put(`/movies/${movieId}`).send(updatedMovie);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('The Lion King (Remastered)');
  });

  it('should delete a movie', async () => {
    const response = await request(app).delete(`/movies/${movieId}`);
    expect(response.status).toBe(204);
  });
});