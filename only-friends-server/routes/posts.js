var express = require('express');
var router = express.Router();

var db = require('../db/index')

router.get('/', async function (req, res, next) {
  const result = await db.getPrompts()

  const response = result.map(post => {
    return {
      id: post.id,
      level: post.level,
      promptId: post.prompt_id,
      parentId: post.parent_id,
      title: post.title,
      author: post.author,
      content: post.content,
      createTimestamp: post.create_timestamp
    }
  })

  res.json(response);
});

router.get('/:promptId', async function (req, res, next) {
  const result = await db.getReplies(req.params.promptId)

  const response = result.map(post => {
    return {
      id: post.id,
      level: post.level,
      promptId: post.prompt_id,
      parentId: post.parent_id,
      title: post.title,
      author: post.author,
      content: post.content,
      createTimestamp: post.create_timestamp
    }
  })

  res.json(response);
});

router.post('/', function (req, res, next) {
  const params = {
    level: parseInt(req.query.level),
    promptId: parseInt(req.query.promptId),
    parentId: parseInt(req.query.parentId),
    title: req.query.title,
    author: req.query.author,
    content: req.query.content
  }

  const result = db.insertPost(params)

  res.json(result);
});

module.exports = router;
