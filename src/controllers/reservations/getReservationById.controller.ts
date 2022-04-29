import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
const validator = createValidator();

interface FindReservationByIdSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        reservationId: string
    }
}

const expectedParams = Joi.object({
    reservationId: Joi.string().guid({ version: 'uuidv4' }).required(),
});

const main: RequestHandler = (req: ValidatedRequest<FindReservationByIdSchema>, res, next) => {
    const { reservationId } = req.params;

    // use id to find reservation

    res.send(req.params);
}

// validator.params(expectedParams),

export const getReservationByIdController = Router({ mergeParams: true }).use(validator.params(expectedParams), main);