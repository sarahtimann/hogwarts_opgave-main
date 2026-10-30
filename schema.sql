Nedenstående er vist ikke korrekt, det skal eksporteres fra pgAdmin med "Backup" og så i Format: PLAIN, Query options: brug insert istedet for copy
TEST det ved at lave en ny database og copy paste alt det nedenstående i den nye database, og se om det virker.


CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    colors VARCHAR(100),
    founder VARCHAR(100)
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    year_semester VARCHAR(50),
    house VARCHAR(100)
);

CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    house VARCHAR(100)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    teacher VARCHAR(100),
    students TEXT
);


-- Houses
INSERT INTO houses (name, colors, founder) VALUES
('Gryffindor', 'Red and Gold', 'Godric Gryffindor'),
('Slytherin', 'Green and Silver', 'Salazar Slytherin'),
('Ravenclaw', 'Blue and Bronze', 'Rowena Ravenclaw'),
('Hufflepuff', 'Yellow and Black', 'Helga Hufflepuff');

-- Students
INSERT INTO students (name, year_semester, house) VALUES
('Harry Potter', 'Year 5', 'Gryffindor'),
('Hermione Granger', 'Year 5', 'Gryffindor'),
('Draco Malfoy', 'Year 5', 'Slytherin'),
('Luna Lovegood', 'Year 5', 'Ravenclaw'),
('Cedric Diggory', 'Year 6', 'Hufflepuff');

-- Teachers
INSERT INTO teachers (name, house) VALUES
('Minerva McGonagall', 'Gryffindor'),
('Severus Snape', 'Slytherin'),
('Filius Flitwick', 'Ravenclaw'),
('Pomona Sprout', 'Hufflepuff');

-- Courses
INSERT INTO courses (name, teacher, students) VALUES
('Transfiguration', 'Minerva McGonagall', 'Harry Potter, Hermione Granger'),
('Potions', 'Severus Snape', 'Harry Potter, Draco Malfoy'),
('Charms', 'Filius Flitwick', 'Hermione Granger, Luna Lovegood'),
('Herbology', 'Pomona Sprout', 'Cedric Diggory, Harry Potter');