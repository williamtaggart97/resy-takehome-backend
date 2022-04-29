import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
const validator = createValidator();

interface FindReservationsSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
    }
}

// TODO: define a query object (pagination?, filters?)
const expectedQuery = Joi.object({
})

const main: RequestHandler = (req: ValidatedRequest<FindReservationsSchema>, res, next) => {
    const { } = req.query;

    // use id to find reservation

    res.send({
        
    });
}

export const getReservationsController = Router().use(validator.query(expectedQuery), main);