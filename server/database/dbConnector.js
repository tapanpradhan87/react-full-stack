import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient("");

const dbName = 'BookStore';
let con;




async function getConnection() {
    if (!con) {
        const mongoClient = new MongoClient(process.env.MONGODB_URL);
        con = await mongoClient.db(dbName);
    }
    return con;
}

export async function mongoCreateBookOne(book) {
    try {
        await mongoClient.connect()
        const createdBook = await mongoClient.db(dbName).collection('Book')
            .insertOne(book);
        return createdBook;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}
export async function mongoCreateBookMany(books) {
    try {
        await mongoClient.connect()
        const createdBooks = await mongoClient.db(dbName).collection('Book')
            .insertMany(books);
        return createdBooks;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}



export async function mongoGetAllBooks() {
    try {
        await mongoClient.connect()
        const books = await mongoClient.db(dbName).collection('Book').find().project({ _id: 0 }).toArray();
        return books;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}


//  module.exports = { mongoCreateBookOne, mongoCreateBookMany, mongoGetAllBooks }