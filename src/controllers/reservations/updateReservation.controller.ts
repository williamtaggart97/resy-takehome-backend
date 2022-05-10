import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation";
import { Reservation } from "../../util/types";
import { updateReservationById } from "../../models/reservation.model";
const validator = createValidator();

interface UpdateReservationSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: Omit<Reservation, 'id'>,
    [ContainerTypes.Params]: { 
        reservationId: string 
    }
}

const expectedBody = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    time: Joi.date().timestamp().required(),
    numGuests: Joi.number().required(),
    restaurantId: Joi.string().guid({ version: 'uuidv4' }).required(),
});

const expectedParams = Joi.object({
    reservationId: Joi.string().required(),
})

const main: RequestHandler = async (req: ValidatedRequest<UpdateReservationSchema>, res, next) => {
    const { reservationId } = req.params;
    

    // use id to find reservation
    const reservation = await updateReservationById(reservationId, req.body);

    if (reservation) {
        res.status(200).send(reservation);
    } else {
        res.sendStatus(404);
    }
}

export const updateReservationController = Router({ mergeParams: true }).use(validator.params(expectedParams), main);