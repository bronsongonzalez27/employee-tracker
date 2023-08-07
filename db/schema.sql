DROP DATABASE IF EXISTS `employee_tracker_db`;
CREATE DATABASE `employee_tracker_db`;

USE employee_tracker_db;

-- Database table for roles, their pay, and title.
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL
);

-- Database table for departments.
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Database table for employees also has checks for roles and managers.
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT, -- This can be NULL
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);
