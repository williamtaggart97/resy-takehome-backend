import { Db, MongoClient } from 'mongodb';

const password = '0ApFRe2VPBZrYQjY';
const uri = `mongodb+srv://pursuit_user:${password}@cluster0.ts4gvdr.mongodb.net/?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(uri);
export const DB_NAME = 'myResyDB';
export const getResyDb: () => Db = () => mongoClient.db(DB_NAME);