// Contains all direct interactions with the Reservation Model

import { ObjectId } from "mongodb";
import { MakeReservationBody } from "../controllers/reservations/makeReservation.controller";
import { getResyDb } from "../configs/mongo.config";
import { Reservation, Restaurant } from "../util/types";

// returns the newly created Reservation
export const makeReservation = async (input: MakeReservationBody): Promise<boolean> => {
    try {
        const { value, ok } = await getResyDb().collection<Restaurant>('restaurants')
            .findOneAndUpdate({
                _id: ObjectId.createFromHexString(input.restaurantId)
            }, {
                $push: { reservations: input }
            })

        return !!ok;
    } catch (err) {
        console.error(err);
        throw new Error(`Make Reservation failed -- ${err.message}`);
    }
}

// returns list of Reservations based on query input
export const getReservations = async (input: any): Promise<Reservation[]> => {
    try {
        // currently get All Reservations
        // return await pgKnex<Reservation>('Reservations').select('*');
        const restaurants = await getResyDb().collection<Restaurant>('restaurant').find({}).toArray();

        return restaurants.map(d => d.reservations).flat();
    } catch (err) {
        console.error(err);
        throw new Error(`Get Reservations failed -- ${err.message}`);
    }
}

export const getReservationsByRestaurantId = async (restaurantId: string): Promise<Reservation[]> => {
    try {
        const restaurant = await getResyDb().collection<Restaurant>('restaurants').findOne({ _id: ObjectId.createFromHexString(restaurantId) });

        return restaurant.reservations;
    } catch (err) {
        console.error(err);
        throw new Error(`Get Reservations by Restaurant Id (${restaurantId}) failed -- ${err.message}`)
    }
}

// returns id of the deleted Reservation
export const deleteReservation = async (firstName: string, lastName: string, restaurantId: string): Promise<boolean> => {
    try {
        const { value, ok } = await getResyDb().collection<Restaurant>('restaurants')
            .findOneAndUpdate({
                _id: ObjectId.createFromHexString(restaurantId)
            }, {
                $pull: { reservations: { firstName, lastName } }
            });

        return !!ok;
    } catch (err) {
        console.error(err);
        throw new Error(`Delete Reservation failed -- ${err.message}`);
    }
}

export const updateReservation = async (firstName: string, lastName: string, restaurantId: string, update: Partial<Omit<Reservation, 'id' | 'restaurantId'>>) => {
    try {
        // generate set obj
        const setObj = Object.entries(update).reduce((prev, [k, v]) => {
            return {
                ...prev,
                [`reservations.${k}`]: v
            }
        }, {});

        console.log(setObj);
        
        const { value, ok } = await getResyDb().collection<Restaurant>('restaurants')
            .findOneAndUpdate({
                _id: ObjectId.createFromHexString(restaurantId),
                "reservations.firstName": firstName,
                "reservations.lastName": lastName,
            }, {
                $set: setObj
            });

        return !!ok;
    } catch (err) {
        console.error(err);
        throw new Error(`Update Reservation Failed -- ${err.message}`);
    }
}