CREATE DATABASE ice_cream_shop;

USE ice_cream_shop;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    dob DATE,
    password VARCHAR(255) NOT NULL
);
