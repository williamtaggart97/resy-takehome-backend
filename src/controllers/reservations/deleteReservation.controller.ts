import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
const validator = createValidator();

interface DeleteReservationSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        id: string
    }
}

const expectedParams = Joi.object({
    id: Joi.string().guid({ version: 'uuidv4' }).required(),
})

const main: RequestHandler = (req: ValidatedRequest<DeleteReservationSchema>, res, next) => {
    const { id } = req.params;

    // use id to delete 
    res.send({
        success: 1,
        removedId: id
    });
}

export const deleteReservationController = Router().use(validator.params(expectedParams), main);