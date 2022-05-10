// Contains all direct interactions with the Reservation Model

import { pgKnex } from "../configs/db.config";
import { Reservation } from "../util/types";

// returns the newly created Reservation
export const makeReservation = async (input: Omit<Reservation, 'id'>): Promise<Reservation> => {
    // Write Ahead Caching
    // TASK 1: Implement writing to the cache any new restaurants that get added to the backend
    // Note: People might want to update their reservation or delete their reservation
    // Question: What type of eviction policy do we think would be best in this situation

    try {
        const [newReservation] = await pgKnex<Reservation>('Reservations').insert(input, '*');

        return newReservation;
    } catch (err) {
        console.error(err);
        throw new Error('Make Reservation failed -- DB Query');
    }
}

// returns Reservation associated with id
export const getReservationById = async (id: string): Promise<Reservation> => {
    try {
        // Cache Aside Implementation
        // STEP 1: Check if Restaurant exists in the cache
        // write function here

        // STEP 2: If Restaurant is not in the cache, check the db for the record
        const reservation = await pgKnex<Reservation>('Reservations').first('*').where({ id });

        if (reservation) {
            // STEP 3: If Restaurant is not in the cache, add record to the cache
            return reservation;
        } else {
            return null;
        }

    } catch (err) {
        console.error(err);
        throw new Error('Get Reservation By Id failed -- DB Query')
    }
}

// returns list of Reservations based on query input
export const getReservations = async (input: any): Promise<Reservation[]> => {
    try {
        // currently get All Reservations
        // TODO: add filters
        return await pgKnex<Reservation>('Reservations').select('*');
    } catch (err) {
        console.error(err);
        throw new Error('Get Reservations failed -- DB Query');
    }
}

// returns id of the deleted Reservation
export const deleteReservation = async (id: string): Promise<string> => {
    try {
        // STEP 1: When removing a reservation from the database, we also need to remove it from the cache
        const rowsDeleted = await pgKnex('Reservations')
            .where({ id })
            .del();

        if (rowsDeleted) {
            return id;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

export const updateReservationById = async (id: string, update: Partial<Reservation>) => {
    try {
        // Write-Through for updates
        // STEP 1: When updating a reservation in the database, we also need to update it in the cache
        // Note: While this may add latency to this operation, making sure we never have stale data in the cache is important

        const updatedReservation = await pgKnex<Reservation>('Reservations')
            .where({ id })
            .update({
                ...update
            });

        if (updatedReservation) {
            return updatedReservation;
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}