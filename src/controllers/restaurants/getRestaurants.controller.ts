import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { getRestaurants } from "../../models/restaurant.model";
const validator = createValidator();

interface FindRestaurantsSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
    }
}

// TODO: define a query object (pagination?, filters?)
const expectedQuery = Joi.object({
})

const main: RequestHandler = async (req: ValidatedRequest<FindRestaurantsSchema>, res, next) => {

    // use id to find reservation
    const restaurants = await getRestaurants(req.query);

    if (restaurants) {
        res.status(200).send({ restaurants })
    } else {
        res.sendStatus(500);
    }
}

export const getRestaurantsController = Router().use(validator.query(expectedQuery), main);