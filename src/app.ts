import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import imagesRouter from './routes/images-routes';
import authRouter from './routes/auth-routes';
import projectRouter from './routes/project';
import heroRouter from './routes/hero-routes';
import { handleErrors } from 'utils/helpers';
import newsRouter from './routes/news-routes';
import programRouter from './routes/program-routes';

import { PORT } from 'config';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send('Connected'));

app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/heroes', heroRouter);
app.use('/api/news', newsRouter);
app.use('/api/programs', programRouter);

app.use((err, req, res, next) => {
  return handleErrors(res, err);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
