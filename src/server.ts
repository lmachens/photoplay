import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectMongoClient } from './server/db';
import router from './server/routes';
import { createUsersCollection } from './server/users';
import cookieParser from 'cookie-parser';
import path from 'path';

const { PORT } = process.env;

const app = express();

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());
// Middleware that parses Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());

app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
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

connectMongoClient().then(async () => {
  console.log('MongoDB connected');

  await createUsersCollection();

  app.listen(PORT, () => {
    console.log(`photoplay app listening at http://localhost:${PORT}`);
  });
});
