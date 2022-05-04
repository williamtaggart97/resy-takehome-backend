// Contains all direct interactions with the Reservation Model

import { pgKnex } from "../configs/db.config";
import { Reservation } from "../util/types";

// returns the newly created Reservation
export const makeReservation = async (input: Omit<Reservation, 'id'>): Promise<Reservation> => {
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
        return await pgKnex<Reservation>('Reservations').first('*').where({ id });
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
        const rowsDeleted = await pgKnex('Reservations')
            .where({ id })
            .del();

        if (rowsDeleted) {
            return id;
        } else {
            throw new Error(`Reservation id: ${id} was not found.`)
        }
    } catch (err) {
        console.error(err);
        throw new Error(err);
    }
}