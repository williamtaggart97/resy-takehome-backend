import { Router } from "express"
import { addRestaurantController } from "../controllers/restaurants/addRestaurant.controller";
import { getRestaurantByIdController } from "../controllers/restaurants/getRestaurantById.controller";
import { getRestaurantsController } from "../controllers/restaurants/getRestaurants.controller";

const getRestaurantsRoute = Router().get('/', getRestaurantsController);
const getRestaurantByIdRoute = Router().get('/:restaurantId', getRestaurantByIdController);
const addRestaurantRoute = Router().post('/', addRestaurantController);
// const deleteRestaurantRoute = Router().delete('/:restaurantId', deleteRestaurantController);

export const restaurantRouter = Router().use('/restaurants', [
    getRestaurantsRoute,
    getRestaurantByIdRoute,
    addRestaurantRoute,
    // deleteRestaurantRoute
]);