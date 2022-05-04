'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { appRouter } from './routes';
import { pgKnex } from './configs/db.config';

// Constants
const LOCAL_PORT = 8080;
const LOCAL_HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use('/api', appRouter);

if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Raffle api listening on port ${process.env.PORT}`)
    
        pgKnex.raw("SELECT 1").then(() => {
            console.log("PostgreSQL connected");
        })
        .catch((e) => {
            console.log("PostgreSQL not connected");
            console.error(e);
        });
    });
} else {
    app.listen(LOCAL_PORT, LOCAL_HOST, () => {
        console.log(`Raffle api listening on port ${LOCAL_PORT}`)
    
        pgKnex.raw("SELECT 1").then(() => {
            console.log("PostgreSQL connected");
        })
        .catch((e) => {
            console.log("PostgreSQL not connected");
            console.error(e);
        });
    });
}



export { app };