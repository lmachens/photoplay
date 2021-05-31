import express from 'express';

const router = express.Router();

router.get('/movies/popular', (_req, res) => {
  res.status(404).send();
});

router.get('/movies/:id', (_req, res) => {
  res.status(404).send();
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
