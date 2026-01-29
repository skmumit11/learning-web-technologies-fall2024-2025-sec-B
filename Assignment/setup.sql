-- Create Database
CREATE DATABASE IF NOT EXISTS product_db;

-- Use Database
USE product_db;

-- Create Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    buying_price DECIMAL(10, 2) NOT NULL,
    selling_price DECIMAL(10, 2) NOT NULL,
    display TINYINT(1) DEFAULT 0
);
