const { Pool } = require('pg')

var pool = null

function init_db() {
  pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
  })
}

async function getPrompts() {
  sql = 'SELECT * FROM posts WHERE level = 0'
  const res = await pool.query(sql)

  return res.rows
}

async function getReplies(promptId) {
  sql = 'SELECT * FROM posts WHERE prompt_id = $1::INT ORDER BY parent_id ASC, create_timestamp ASC'
  values = [promptId]
  const res = await pool.query(sql, values)
  return res.rows
}

async function insertPost(params) {
  if (params.parentId == -1) {
    sql = "INSERT INTO posts (level, prompt_id, parent_id, title, author, content, create_timestamp) VALUES ($1::INT, $2::INT, $3::INT, $4, $5, $6, $7);"
    values = [params.level, params.promptId, params.parentId, params.title, params.author, params.content, Date.now()]

    const res = await pool.query(sql, values)
    return res.rows
  }

  threadId = await getThreadId(params.parentId)

  sql = "INSERT INTO posts (level, prompt_id, parent_id, thread_id, title, author, content, create_timestamp) VALUES ($1::INT, $2::INT, $3::INT, $4::INT, $5, $6, $7, $8);"
  values = [params.level, params.promptId, params.parentId, threadId, params.title, params.author, params.content, Date.now()]

  const res = await pool.query(sql, values)
  return res.rows
}

async function getThreadId(parentId) {
  sql = 'SELECT thread_id FROm posts WHERE id = $1::INT'
  value = [parentId]
  const res = await pool.query(sql, values)

  return res.rows[0].thread_id
}
module.exports = {
  init_db,
  getPrompts,
  getReplies,
  insertPost
}