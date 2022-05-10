import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { getReservationById } from "../../models/reservation.model";
const validator = createValidator();

interface FindReservationByIdSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        reservationId: string
    }
}

const expectedParams = Joi.object({
    reservationId: Joi.string().guid({ version: 'uuidv4' }).required(),
});

const main: RequestHandler = async (req: ValidatedRequest<FindReservationByIdSchema>, res, next) => {
    try {
        const { reservationId } = req.params;

        // use id to find reservation
        const reservation = await getReservationById(reservationId);

        if (reservation) {
            res.status(200).send(reservation);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err)
    }
}

// validator.params(expectedParams),

export const getReservationByIdController = Router({ mergeParams: true }).use(validator.params(expectedParams), main);