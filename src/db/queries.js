exports.getAllQuery = "SELECT * FROM person"

exports.getOneQuery = "SELECT * FROM person WHERE id = $1"

exports.createOneQuery = "INSERT INTO person (name, age) VALUES ($1, $2) RETURNING *"

exports.updateOneQuery = "UPDATE person SET name = $1, age = $2 where id = $3"

exports.deleteOneQuery = "DELETE FROM person WHERE id = $1"