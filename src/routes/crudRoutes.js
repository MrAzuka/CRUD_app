const {Router} = require('express')
const router = Router()
const {getAll,getOne, createOne, updateOne, deleteOne} = require('../controllers/crudControllers')

// @routes  /api/
// @desc    Get all persons
router.get('/', getAll)

// @routes  /api/:id
// @desc    Get one person
router.get('/:id', getOne)

// @routes  /api/new/
// @desc    Create one person
router.post('/new', createOne)

// @routes  /api/update/:id
// @desc    Update one person
router.put('/update/:id', updateOne)

// @routes  /api/delete/:id
// @desc    Delete one person
router.delete('/delete/:id', deleteOne)


module.exports = router