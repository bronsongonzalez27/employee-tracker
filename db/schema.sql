drop database if exists `employee_tracker_db`;
create database `employee_tracker_db`;

USE employee_tracker_db;
-- database table for roles, their pay and title.
create table roles(
    id int auto_increment primary key,
    name varchar(30) not null
       salary varchar(30) not null,
    title varchar(30) not null,
);
-- database table for departments 
create table departments(
 
    id int auto_increment primary key,
    name varchar(30) not null
);
-- database table for employees also has checks for roles and managers
create table employees(
    id int auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int not null,
    foreign key (role_id) references roles(id),
    foreign key (manager_id) references employees(id)
);
