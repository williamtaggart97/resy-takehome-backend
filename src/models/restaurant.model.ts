// Contains all direct interactions with the Restaurant Model
import { pgKnex } from "../configs/db.config";
import { Restaurant } from "../util/types"


export const addRestaurant = async (input: Omit<Restaurant, 'id'>): Promise<Restaurant> => {
    try {
        const [newRestaurant] = await pgKnex<Restaurant>('Restaurants').insert(input).returning('*');

        return newRestaurant;
    } catch (err) {
        console.error(err);
        throw new Error('Add Restaurant Failed -- DB Query')
    }
}

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
    try {
        return await pgKnex<Restaurant>('Restaurants')
            .leftJoin('Reservations', 'Reservations.restaurantId', 'Restaurants.id')
            .select('Restaurants.*', pgKnex.raw('JSON_AGG("Reservations".*) as reservations'))
            .where({ 'Restaurants.id': id })
            .groupBy('Restaurants.id', 'Reservations.restaurantId');
    } catch (err) {
        console.error(err);
        throw new Error('Get Restaurant By ID -- DB Query')
    }
}

export const getRestaurants = async (input: any): Promise<Restaurant[]> => {
    try {
        return await pgKnex<Restaurant>('Restaurants')
            .leftJoin('Reservations', 'Reservations.restaurantId', 'Restaurants.id')
            .select('Restaurants.*', pgKnex.raw('JSON_AGG("Reservations".*) as reservations'))
            .groupBy('Restaurants.id', 'Reservations.restaurantId');
    } catch (err) {
        console.error(err);
        throw new Error('Get Restaurants -- DB Query')
    }
}