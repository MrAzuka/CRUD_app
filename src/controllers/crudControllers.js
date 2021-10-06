const pool = require('../db/connectDB')
const {getAllQuery, getOneQuery, createOneQuery, updateOneQuery, deleteOneQuery} = require('../db/queries')

exports.getAll = async (req,res) => {
    try {
        const allPerson = await pool.query(getAllQuery)

        res.json(allPerson.rows)
    } catch (err) {
        console.message(err)
        res.status(500).json("Error getting persons")
    }
}

exports.getOne =  async (req,res) => {
    try {
        const {id} = req.params
        const onePerson = await pool.query(getOneQuery, [id])

        res.json(onePerson.rows[0])
    } catch (err) {
        console.message(err)
        res.status(500).json("Error getting person")
    }
}

exports.createOne = async (req,res) => {
    try {
        const {name, age} = req.body
        const newPerson = await pool.query(createOneQuery, [name, age])

        res.json(newPerson.rows[0])
    } catch (err) {
        console.message(err)
        res.status(500).json("Error creating person.")
    }
}

exports.updateOne =  async (req,res) => {
    try {
        const {name, age} = req.body
        const {id} = req.params

        const updatePerson = await pool.query(updateOneQuery, [name, age, id])

        res.json(`Person with id ${id} updated`)
    } catch (err) {
        console.message(err)
        res.status(500).json("Update Error")
    }
}

exports.deleteOne = async (req,res) => {
    try {
        const {id} = req.params

        const deletePerson = await pool.query(deleteOneQuery, [id])

        res.json(`Person with id ${id} deleted`)
    } catch (err) {
        console.message(err)
        res.status(500).json("Delete Error")
    }
}