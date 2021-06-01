import express from 'express';
import { getMovieById, getPopularMovies } from './theMovieDB';

const router = express.Router();

router.get('/movies/popular', async (_req, res) => {
  try {
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || 'Internal server error');
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getMovieById(id);
    if (!movie) {
      res.status(404).send();
      return;
    }
    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || 'Internal server error');
  }
});

router.get('/actors/:id', (_req, res) => {
  res.status(404).send();
});

router.get('/shows/:id', (_req, res) => {
  res.status(404).send();
});

router.get('/search', (_req, res) => {
  res.status(404).send();
});

router.post('/users/login', (_req, res) => {
  res.status(404).send();
});

router.post('/users', (_req, res) => {
  res.status(404).send();
});

router.post('/users/forgot-password', (_req, res) => {
  res.status(404).send();
});

router.get('/users/me', (_req, res) => {
  res.status(404).send();
});

export default router;
