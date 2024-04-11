import { mongoCreateBookOne, mongoCreateBookMany, mongoGetAllBooks } from '../database/dbConnector.js'


export const createBookOne = async (req, res) => {
    const data = await mongoCreateBookOne(req.body)
    res.json(data);
}
export const createBookMany = async (req, res) => {
    const data = await mongoCreateBookMany(req.body)
    res.json(data);
}
export const getAllBooks = async (req, res) => {
    const data = await mongoGetAllBooks()
    res.json(data);
}


//module.exports = { createBookOne, createBookMany, getAllBooks }