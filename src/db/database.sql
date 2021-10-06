-- Create a database
CREATE DATABASE person_database;

-- Create table in database
CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    age INT);