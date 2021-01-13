--
-- PostgreSQL
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: todo; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA todo;


ALTER SCHEMA todo OWNER TO postgres;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';

SET default_tablespace = '';

--
-- Name: tasks; Type: TABLE; Schema: todo; Owner: postgres
--

CREATE TABLE todo.tasks (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    createdat timestamp NOT NULL,
    updatedat timestamp NOT NULL
);


ALTER TABLE todo.tasks OWNER TO postgres;

--
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: todo; Owner: postgres
--

ALTER TABLE ONLY todo.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);

INSERT INTO todo.tasks (id, title, description, createdat, updatedat) VALUES ('86e4d90f-445a-4a1b-b128-760cae5d517b', 'Note', 'A simple note.', '2021-01-04 18:48:44.582236', '2021-01-04 18:51:40.628659');

