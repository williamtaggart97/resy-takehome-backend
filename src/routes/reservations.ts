import { Router } from "express"

const getReservationsRoute = Router().get('/', (req, res) => {
    res.send('Hello World');
});

export const reservationRouter = Router().use('/reservations', [
    getReservationsRoute
]);