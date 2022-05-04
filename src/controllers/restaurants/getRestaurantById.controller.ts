import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { getReservationById } from "../../models/reservation.model";
const validator = createValidator();

interface FindRestaurantByIdSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        restaurantId: string
    }
}

const expectedParams = Joi.object({
    restaurantId: Joi.string().guid({ version: 'uuidv4' }).required(),
});

const main: RequestHandler = async (req: ValidatedRequest<FindRestaurantByIdSchema>, res, next) => {
    const { restaurantId } = req.params;

    // use id to find restaurant
    const restaurant = await getReservationById(restaurantId);

    if (restaurant) {
        res.status(200).send(restaurant);
    } else {
        res.sendStatus(404);
    }
}

export const getRestaurantByIdController = Router({ mergeParams: true }).use(validator.params(expectedParams), main);