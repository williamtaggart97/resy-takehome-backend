import express from 'express';
import { appRouter } from '../../../routes';
import * as reservationModel from '../../../models/reservation.model';
import request from 'supertest';
import { Reservation, errorHandler } from '../../../util';

describe('Get Reservations Controller', () => {
    let app: any;
    const exampleReservations: Reservation[] = [{
        id: "62cb71d9-4aa5-4255-b33d-e08c3af1c462",
        createdAt: "2022-08-30T16:14:52.118Z",
        firstName: "Billy",
        lastName: "Taggart",
        phoneNumber: "2891336102",
        email: null,
        time: "2022-05-11T18:00:00.000Z",
        numGuests: 4,
        restaurantId: "b1ca61c9-57a1-4f19-ad0e-00962c95f1eb"
    }, {
        id: "c7e08002-0b2b-4130-93b0-8bb8a4325493",
        createdAt: "2022-08-30T16:14:52.148Z",
        firstName: "Will",
        lastName: "Kenney",
        phoneNumber: "8145764616",
        email: null,
        time: "2022-05-12T19:00:00.000Z",
        numGuests: 2,
        restaurantId: "b1ca61c9-57a1-4f19-ad0e-00962c95f1eb"
    }]

    beforeAll(() => {
        app = express();
        app.use('/api', appRouter);
        app.use(errorHandler);
    })

    it('should always call getReservations', async () => {
        const getReservationsSpy = jest.spyOn(reservationModel, 'getReservations').mockImplementation(async (input) => {
            return Promise.resolve([]);
        });

        await request(app).get('/api/reservations');

        expect(getReservationsSpy).toHaveBeenCalled();
    });

    it('should send a 200 code with the result of getReservations', async () => {
        jest.spyOn(reservationModel, 'getReservations').mockImplementation((input) => {
            return Promise.resolve(exampleReservations)
        });

        const response = await request(app).get('/api/reservations');

        expect(response.statusCode).toBe(200);
        expect(response.body.reservations).toStrictEqual(exampleReservations);
    })
});
