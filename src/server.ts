'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { appRouter } from './routes';
import { pgKnex } from './configs/db.config';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use('/api', appRouter);

app.listen(PORT, HOST, () => {
    console.log(`Raffle api listening on port ${PORT}`)

    pgKnex.raw("SELECT 1").then(() => {
        console.log("PostgreSQL connected");
    })
    .catch((e) => {
        console.log("PostgreSQL not connected");
        console.error(e);
    });
});

export { app };