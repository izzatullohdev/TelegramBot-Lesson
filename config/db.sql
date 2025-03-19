CREATE DATABASE telegrambot1;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userid BIGINT NOT NULL,
    username VARCHAR(50) NOT NULL,
    phonenumber VARCHAR(12) NOT NULL,
);