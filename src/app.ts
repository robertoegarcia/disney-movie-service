import express from 'express';
import { setMoviesRoutes } from './routes/moviesRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setMoviesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;