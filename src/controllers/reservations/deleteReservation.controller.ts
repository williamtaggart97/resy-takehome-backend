import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { deleteReservation } from "../../models/reservation.model";
const validator = createValidator();

interface DeleteReservationSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        reservationId: string
    }
}

const expectedParams = Joi.object({
    reservationId: Joi.string().guid({ version: 'uuidv4' }).required(),
})

const main: RequestHandler = async (req: ValidatedRequest<DeleteReservationSchema>, res, next) => {
    const { reservationId } = req.params;

    // use id to delete 
    const deletedId = await deleteReservation(reservationId);

    if (deletedId) {
        res.status(200).send({
            success: 1,
            removedId: deletedId
        });
    } else {
        res.sendStatus(404);
    }
    
}

export const deleteReservationController = Router({ mergeParams: true }).use(validator.params(expectedParams), main);