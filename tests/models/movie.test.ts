import { Movie } from '../../src/models/movie';

describe('Movie Model', () => {
  it('should create a movie object with valid properties', () => {
    const movie: Movie = {
      id: '1',
      title: 'The Lion King',
      releaseDate: '1994-06-15',
      genre: 'Animation',
    };

    expect(movie).toHaveProperty('id', '1');
    expect(movie).toHaveProperty('title', 'The Lion King');
    expect(movie).toHaveProperty('releaseDate', '1994-06-15');
    expect(movie).toHaveProperty('genre', 'Animation');
  });

  it('should not allow missing title', () => {
    const movie: Partial<Movie> = {
      id: '2',
      releaseDate: '1995-11-22',
      genre: 'Animation',
    };

    expect(movie.title).toBeUndefined();
  });

  it('should not allow missing releaseDate', () => {
    const movie: Partial<Movie> = {
      id: '3',
      title: 'Toy Story',
      genre: 'Animation',
    };

    expect(movie.releaseDate).toBeUndefined();
  });

  it('should not allow missing genre', () => {
    const movie: Partial<Movie> = {
      id: '4',
      title: 'Finding Nemo',
      releaseDate: '2003-05-30',
    };

    expect(movie.genre).toBeUndefined();
  });
});