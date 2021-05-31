import express from 'express';
import router from './server/routes';

const { PORT = 3000 } = process.env;

const app = express();

app.use('/api', router);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
