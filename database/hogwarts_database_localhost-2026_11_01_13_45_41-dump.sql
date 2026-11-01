--
-- PostgreSQL database dump
--

\restrict W1ZGeZsbHeshbBB155PFK0654l65dgeWQO9P9gKOhJAPhC4x2mGrCfqTdstYvrl

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: course_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_students (
    course_id integer NOT NULL,
    student_id integer NOT NULL
);


ALTER TABLE public.course_students OWNER TO postgres;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(100),
    teacher_id integer NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courses_id_seq OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(100),
    colors character varying(100),
    founder character varying(100)
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- Name: houses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.houses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.houses_id_seq OWNER TO postgres;

--
-- Name: houses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.houses_id_seq OWNED BY public.houses.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(100),
    year character varying(50),
    house character varying(100),
    house_id integer
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_id_seq OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(100),
    house character varying(100),
    house_id integer
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: houses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses ALTER COLUMN id SET DEFAULT nextval('public.houses_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Data for Name: course_students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.course_students VALUES (2, 1);
INSERT INTO public.course_students VALUES (2, 3);
INSERT INTO public.course_students VALUES (3, 2);
INSERT INTO public.course_students VALUES (3, 4);
INSERT INTO public.course_students VALUES (4, 5);
INSERT INTO public.course_students VALUES (4, 1);
INSERT INTO public.course_students VALUES (1, 1);
INSERT INTO public.course_students VALUES (1, 2);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses VALUES (2, 'Potions', 2);
INSERT INTO public.courses VALUES (3, 'Charms', 3);
INSERT INTO public.courses VALUES (4, 'Herbology', 4);
INSERT INTO public.courses VALUES (1, 'Transfiguration', 1);


--
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses VALUES (1, 'Gryffindor', 'Red and Gold', 'Godric Gryffindor');
INSERT INTO public.houses VALUES (2, 'Slytherin', 'Green and Silver', 'Salazar Slytherin');
INSERT INTO public.houses VALUES (3, 'Ravenclaw', 'Blue and Bronze', 'Rowena Ravenclaw');
INSERT INTO public.houses VALUES (4, 'Hufflepuff', 'Yellow and Black', 'Helga Hufflepuff');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students VALUES (4, 'Luna Lovegood', 'Year 5', 'Ravenclaw', 3);
INSERT INTO public.students VALUES (5, 'Cedric Diggory', 'Year 6', 'Hufflepuff', 4);
INSERT INTO public.students VALUES (2, 'Hermione Granger', 'Year 5', 'Gryffindor', 1);
INSERT INTO public.students VALUES (3, 'Draco Malfoy', 'Year 5', 'Slytherin', 2);
INSERT INTO public.students VALUES (1, 'Harry Potter', 'Year 5', 'Gryffindor', 1);


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers VALUES (1, 'Minerva McGonagall', 'Gryffindor', 1);
INSERT INTO public.teachers VALUES (2, 'Severus Snape', 'Slytherin', 2);
INSERT INTO public.teachers VALUES (3, 'Filius Flitwick', 'Ravenclaw', 3);
INSERT INTO public.teachers VALUES (4, 'Pomona Sprout', 'Hufflepuff', 4);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 8, true);


--
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.houses_id_seq', 4, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 8, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 15, true);


--
-- Name: course_students course_students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT course_students_pkey PRIMARY KEY (course_id, student_id);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: course_students course_students_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT course_students_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- Name: course_students course_students_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_students
    ADD CONSTRAINT course_students_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id);


--
-- Name: courses courses_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.teachers(id);


--
-- Name: students students_house_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_house_fk FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- Name: teachers teachers_house_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_house_fk FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- PostgreSQL database dump complete
--

\unrestrict W1ZGeZsbHeshbBB155PFK0654l65dgeWQO9P9gKOhJAPhC4x2mGrCfqTdstYvrl

