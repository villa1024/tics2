CREATE DATABASE usuarios;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    email TEXT,
    password TEXT
);

CREATE TABLE vecino(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    numero TEXT,
    nombre_numero TEXT
);

CREATE TABLE usuario_guardia(
    id_guard TEXT,
    tipo TEXT,
    nom_guard TEXT,
    pass_guard TEXT
);