import { Router } from "express"
import { getReservationByIdController } from "../controllers/reservations/getReservationById.controller";
import { deleteReservationController } from "../controllers/reservations/deleteReservation.controller";
import { getReservationsController } from "../controllers/reservations/getReservations.controller";
import { makeReservationController } from "../controllers/reservations/makeReservation.controller";

const getReservationsRoute = Router().get('/', getReservationsController);
const getReservationByIdRoute = Router().get('/:reservationId', getReservationByIdController);
const makeReservationRoute = Router().post('/', makeReservationController);
const deleteReservationRoute = Router().delete('/:reservationId', deleteReservationController);

export const reservationRouter = Router().use('/reservations', [
    getReservationsRoute,
    getReservationByIdRoute,
    makeReservationRoute,
    deleteReservationRoute
]);