import express from 'express';
import knex from 'knex';
import 'dotenv/config';

const app = express();
const { PORT } = process.env || 5050;

app.get('/', (_req, res) => {
    res.send("Welcom to the backend!")
});

app.listen(PORT, () => {
    console.log("Listening to port: ", PORT)
})
