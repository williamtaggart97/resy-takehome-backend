'use strict';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { appRouter } from './routes';
import { pgKnex } from './configs/db.config';
import { errorHandler } from './util/errors';
import * as fs from 'fs';
import { mongoClient } from './configs/mongo.config';

// Constants
const LOCAL_PORT = 8080;
const LOCAL_HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (req, res, next) => { 
    try {
        const buffer = fs.readFileSync('./README.html');
        res.status(200).send(buffer.toString());
    } catch (err) {
        next(err)
    }
})
app.use('/api', appRouter);
app.use(errorHandler);

// cache setup 
if (process.env.PORT) {
    console.log('heroku version')
    app.listen(process.env.PORT, async () => {
        console.log(`Raffle api listening on port ${process.env.PORT}`)

        pgKnex.raw("SELECT 1").then(() => {
            console.log("PostgreSQL connected");
        })
            .catch((e) => {
                console.log("PostgreSQL not connected");
                console.error(e);
            });

        // cache setup - removed because unused (for now)
        // await redisClient.connect().then(() => {
        //     console.log('Redis Client Connected')
        // })
        //     .catch((e) => {
        //         console.log('Redis Client not connected');
        //         console.error(e);
        //     });
    });
} else {
    app.listen(LOCAL_PORT, LOCAL_HOST, async () => {
        console.log(`Raffle api listening on port ${LOCAL_PORT}`)

        try {
            const database = mongoClient.db('sample_mflix');
            const movies = database.collection('movies');
            // Query for a movie that has the title 'Back to the Future'
            const query = { title: 'Back to the Future' };
            const movie = await movies.findOne(query);
            console.log(movie);
        } finally {
            // Ensures that the client will close when you finish/error
            await mongoClient.close();
        }       
    });
}

export { app };