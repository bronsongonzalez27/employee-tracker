USE employee_tracker_db;

insert into employees
(first_name, last_name, role_id, manager_id)
VALUES
('bronson, gonzalez, sales, null'),
('james, smith, sales, 1'),
('jane, doe, sales, 1'),
('john, doe, sales, null');



insert into roles
(name, salary, title)
VALUES
('sales', 100000, 'sales'),
('developer', 5, 'job'),
('manager', 25, 'manager');

insert into departments
(name)
VALUES
('sales'),
('developer'),
('manager');


