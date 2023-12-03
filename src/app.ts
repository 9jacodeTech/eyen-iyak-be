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
import galleryRouter from './routes/gallery-routes';
import aboutPageRouter from './routes/about-page-routes';
import partnerRouter from './routes/partner-routes';
import aboutContentRouter from './routes/about-content-routes';
import teamMembersRouter from './routes/team-members-routes';
import brandStoryRouter from './routes/brand-story-routes';
import searchRouter from './routes/search-routes';
import subProgramRouter from './routes/sub-programs-routes';
import footerRouter from './routes/footer-routes';
import supportRouter from './routes/support-routes';

import { PORT } from 'config';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send('Connected'));

app.use('/api/images', imagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/heros', heroRouter);
app.use('/api/news', newsRouter);
app.use('/api/programs', programRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/about-page', aboutPageRouter);
app.use('/api/partners', partnerRouter);
app.use('/api/about', aboutContentRouter, teamMembersRouter, brandStoryRouter);
app.use('/api/about', aboutContentRouter);
app.use('/api/search', searchRouter);
app.use('/api/sub-programs', subProgramRouter);
app.use('/api/footer', footerRouter);
app.use('/api/support', supportRouter);

app.use((err, req, res, next) => {
  return handleErrors(res, err);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
