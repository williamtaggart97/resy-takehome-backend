import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
const validator = createValidator();

interface MakeReservationSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
    }
}

// TODO: define a query object (pagination?, filters?)
const expectedBody = Joi.object({
})

const main: RequestHandler = (req: ValidatedRequest<MakeReservationSchema>, res, next) => {
    const { } = req.query;

    // use id to find reservation

    res.send({
        
    });
}

export const makeReservationController = Router().use(validator.body(expectedBody), main);