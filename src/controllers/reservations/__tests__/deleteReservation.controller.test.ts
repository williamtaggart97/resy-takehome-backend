import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { appRouter } from '../../../routes';
import * as reservationModel from '../../../models/reservation.model';
import request from 'supertest';
import { errorHandler } from '../../../util';

describe('Delete Reservation Controller', () => {
    let app: any;

    beforeAll(() => {
        app = express();
        app.use('/api', appRouter);
        app.use(errorHandler);
    })

    it('should call deleteReservation when valid uuid provided', async () => {
        const uuid = uuidv4();
        const deleteReservationSpy = jest.spyOn(reservationModel, 'deleteReservation').mockImplementation((id) => {
            return Promise.resolve(id)
        });

        await request(app).delete(`/api/reservations/${uuid}`);

        expect(deleteReservationSpy).toHaveBeenCalled();
    });

    it('should respond with 200 when success', async () => {
        const uuid = uuidv4();
        const deleteReservationSpy = jest.spyOn(reservationModel, 'deleteReservation').mockImplementation((id) => {
            return Promise.resolve(id)
        });

        const response = await request(app).delete(`/api/reservations/${uuid}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({
            success: 1,
            removedId: uuid
        });
    });

    it('should respond with 404 when no deletedId returned', async () => {
        const uuid = uuidv4();
        const deleteReservationSpy = jest.spyOn(reservationModel, 'deleteReservation').mockImplementation((id) => {
            return Promise.resolve(undefined)
        });

        const response = await request(app).delete(`/api/reservations/${uuid}`);

        expect(response.statusCode).toBe(404)
    });


});
