CREATE DATABASE usuarios;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    email TEXT,
    password TEXT
);