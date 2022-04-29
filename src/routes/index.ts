import { Router } from 'express';
import { reservationRouter } from './reservations';

export const appRouter = Router().use(
    reservationRouter,
)