CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    prompt_id INTEGER,
    parent_id INTEGER,
    level INTEGER NOT NULL,
    title TEXT,
    author TEXT,
    content TEXT,
    create_timestamp BIGINT
);

CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    prompt_id INTEGER,
    thread_id INTEGER,
    create_timestamp BIGINT
)

INSERT INTO posts (level, prompt_id, parent_id, title, author, content, create_timestamp)
VALUES (0, 1, 1,'soccer', 'alex na', 'I love soccer', 1673481188937);

CREATE FUNCTION replace_null_ids() 
   RETURNS TRIGGER 
   LANGUAGE PLPGSQL
AS $$
BEGIN
   IF NEW.level = 0 THEN
    UPDATE posts
    SET 
        prompt_id = id,
        parent_id = id
	WHERE posts.id = NEW.id;
	END IF;
	
	RETURN NEW;
END;
$$;
