import { Router } from "express"

const getRestaurantsRoute = Router().get('/', getRestaurantsController);
const getRestaurantByIdRoute = Router().get('/:id', getRestaurantByIdController);
const makeRestaurantRoute = Router().post('/', makeRestaurantController);
const deleteRestaurantRoute = Router().delete('/:id', deleteRestaurantController);

export const restaurantRouter = Router().use('/reservations', [
    getRestaurantsRoute,
    getRestaurantByIdRoute,
    makeRestaurantRoute,
    deleteRestaurantRoute
]);