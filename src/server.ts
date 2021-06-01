import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import router from './server/routes';

const { PORT } = process.env;

const app = express();

app.use('/api', router);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

/**
 * Error handling for all routes.
 * See https://expressjs.com/en/guide/error-handling.html
 */
type Error = {
  status?: number;
  message?: string;
};
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (res.headersSent) {
      return next(err);
    }
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
  }
);

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
