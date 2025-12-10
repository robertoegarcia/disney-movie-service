# Disney Movies Service

This project is a REST API for managing Disney movies, built with Node.js and TypeScript using Express. It provides endpoints for creating, retrieving, updating, and deleting movie records.

## Project Structure

```
disney-movies-service-1
├── src
│   ├── controllers        # Contains controllers for handling requests
│   ├── routes             # Contains route definitions
│   ├── models             # Contains data models
│   ├── app.ts             # Entry point of the application
│   └── types              # Type definitions
├── tests                  # Contains test files for controllers, routes, and models
├── package.json           # NPM package configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration for testing
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd disney-movies-service-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Movies

- **GET /movies**: Retrieve a list of all movies.
- **GET /movies/:id**: Retrieve a movie by its ID.
- **POST /movies**: Create a new movie.
- **PUT /movies/:id**: Update an existing movie by its ID.
- **DELETE /movies/:id**: Delete a movie by its ID.

## Usage Examples

### Get All Movies
```bash
curl -X GET http://localhost:3000/movies
```

### Create a Movie
```bash
curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title": "New Movie", "releaseDate": "2023-01-01", "genre": "Animation"}'
```

## Testing

To run the tests, use the following command:
```bash
npm test
```

This will execute all the Jest tests defined in the `tests` directory.

## License

This project is licensed under the MIT License.