import { MongoClient } from 'mongodb';


// const mongoClient = new MongoClient();

const dbName = 'BookStore';
let con;




async function getConnection() {
    if (!con) {
        const mongoClient = new MongoClient(process.env.MONGODB_URL);
        await mongoClient.connect()
        con = mongoClient.db(dbName);
    }
    return con;
}

export async function mongoCreateBookOne(book) {
    try {
        const conn = await getConnection();
        const createdBook = conn.collection('Book')
            .insertOne(book);
        return createdBook;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}
export async function mongoCreateBookMany(books) {
    try {
        const conn = await getConnection();
        const createdBooks = conn.collection('Book')
            .insertMany(books);
        return createdBooks;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}



export async function mongoGetAllBooks() {
    try {
        const conn = await getConnection();
        const books = conn.collection('Book').find().project({ _id: 0 }).toArray();
        return books;
    } catch (e) {
        console.error('Error occured in getAllBooks', e);
    }
}


//  module.exports = { mongoCreateBookOne, mongoCreateBookMany, mongoGetAllBooks }