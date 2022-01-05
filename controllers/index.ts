import express from 'express';
import opticiansRouter from './opticians';
import authRouter from './auth';
import daysRouter from './days';
import modelsRouter from './models';
import templesRouter from './temples';
import newsRouter from './news';
import wishlistsRouter from './wishlists';
import openingHoursRouter from './openingHours';

const setupRoutes = (app: express.Application) => {
  app.use('/api/opticians', opticiansRouter);
  app.use('/api/login', authRouter);
  app.use('/api/days', daysRouter);
  app.use('/api/models', modelsRouter);
  app.use('/api/temples', templesRouter);
  app.use('/api/news', newsRouter);
  app.use('/api/wishlists', wishlistsRouter);
  app.use('/api/openingHours', openingHoursRouter);
};

export default setupRoutes;
