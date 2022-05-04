import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { getReservations } from "../../models/reservation.model";
const validator = createValidator();

interface FindReservationsSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
    }
}

// TODO: define a query object (pagination?, filters?)
const expectedQuery = Joi.object({
})

const main: RequestHandler = async (req: ValidatedRequest<FindReservationsSchema>, res, next) => {

    const reservations = await getReservations(req.query);

    if (reservations) {
        res.status(200).send({ reservations })
    } else {
        res.sendStatus(500);
    }
}

export const getReservationsController = Router().use(validator.query(expectedQuery), main);