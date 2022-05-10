import { RequestHandler, Router } from "express"
import Joi from "joi"
import { ContainerTypes, createValidator, ValidatedRequest, ValidatedRequestSchema } from "express-joi-validation"
import { getRestaurants } from "../../models/restaurant.model";
const validator = createValidator();

interface FindRestaurantsSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        filters: any
    }
}

// TODO: define a query object (pagination?, filters?)
const expectedQuery = Joi.object({
    filters: Joi.object({

    }),
    searchTerm: Joi.string(),

})

const main: RequestHandler = async (req: ValidatedRequest<FindRestaurantsSchema>, res, next) => {
    try {
        // use id to find reservation
        const restaurants = await getRestaurants(req.query);

        if (restaurants) {
            res.status(200).send({ restaurants })
        }
    } catch (err) {
        next(err)
    }
}

export const getRestaurantsController = Router().use(validator.query(expectedQuery), main);