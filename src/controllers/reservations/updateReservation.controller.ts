import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation";
import { Reservation } from "../../util/types";
import { updateReservation } from "../../models/reservation.model";

const validator = createValidator();

interface UpdateReservationSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: any,
}

const expectedBody = Joi.object({
    restaurantId: Joi.string().guid({ version: 'uuidv4' }).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/),
    email: Joi.string().email({ tlds: { allow: false } }),
    time: Joi.date(),
    numGuests: Joi.number(),
});

const main: RequestHandler = async (req: ValidatedRequest<UpdateReservationSchema>, res, next) => {
    try {
        const { restaurantId, firstName, lastName, ...update } = req.body;

        // use id to find reservation
        const success = await updateReservation(firstName, lastName, restaurantId, update);

        if (success) {
            res.status(200).send(1);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err)
    }
}

export const updateReservationController = Router({ mergeParams: true }).use(
    // validator.params(expectedParams),
    validator.body(expectedBody),
    main
);
