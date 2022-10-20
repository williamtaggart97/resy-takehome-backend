// Contains all direct interactions with the Restaurant Model
import { getResyDb } from "../configs/mongo.config";
// import { pgKnex } from "../configs/db.config";
import { Restaurant, RestaurantSearchFilters } from "../util/types"
import { ObjectId } from "mongodb";

export const addRestaurant = async (input: Omit<Restaurant, '_id'>): Promise<Restaurant> => {
    try {
        // const [newRestaurant] = await pgKnex<Restaurant>('Restaurants').insert({ ...input, diningRestriction: (input.diningRestriction as any) === '' ? null : input.diningRestriction }).returning('*');
        const { insertedId, acknowledged } = await getResyDb().collection('restaurants').insertOne({ ...input, diningRestriction: (input.diningRestriction as any) === '' ? null : input.diningRestriction })

        if (acknowledged) {
            return await getResyDb().collection<Restaurant>('restaurants').findOne({ _id: insertedId })
        } else {

        }
    } catch (err) {
        console.error(err);
        throw new Error(`Add Restaurant Failed -- ${err.message}`)
    }
}

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
    try {
        return await getResyDb().collection<Restaurant>('restaurants').findOne({ _id: ObjectId.createFromHexString(id) })
    } catch (err) {
        console.error(err);
        throw new Error(`Get Restaurant By ID -- ${err.message}`)
    }
}

export const getRestaurants = async ({ filters, searchTerm }: {
    filters?: RestaurantSearchFilters,
    searchTerm?: string
}): Promise<Restaurant[]> => {
    try {
        return await getResyDb().collection<Restaurant>('restaurants').find({
            ...filters,
            // text search index
            $text: { $search: searchTerm }
        }).toArray();
    } catch (err) {
        console.error(err);
        throw new Error(`Get Restaurants -- ${err.message}`)
    }
}

// returns id of the deleted Restaurant
export const deleteRestaurant = async (id: string): Promise<number> => {
    try {
        const { acknowledged, deletedCount } = await getResyDb().collection<Restaurant>('restaurants').deleteOne({ _id: ObjectId.createFromHexString(id) })

        if (acknowledged && deletedCount) {
            return deletedCount;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        throw new Error(`Delete Restaurant failed -- ${err.message}`);
    }
}

export const updateRestaurantById = async (id: string, update: Partial<Omit<Restaurant, '_id' | 'reservations'>>): Promise<Restaurant> => {
    try {
        const { ok, value } = await getResyDb().collection<Restaurant>('restaurants').findOneAndUpdate({ _id: ObjectId.createFromHexString(id) }, { $set: update });
        if (ok) {
            return value;
        } else {
            throw new Error('MongoDB returned not ok')
        }
    } catch (err) {
        console.error(err);
        throw new Error(`Update Restaurant Failed -- ${err.message}`);
    }
}