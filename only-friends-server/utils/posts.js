function orderPosts(posts, prompt_id) {
  const prompt = posts[0]
  const index_map = { [prompt_id]: [] }

  posts.forEach(row => {
    if (!index_map[row['id']]) {
      index_map[row['id']] = []
    }
    if (index_map[row['id']] !== index_map[row['parent_id']]) {
      index_map[row['parent_id']].push(row)
    }
  })

  return build_tree(prompt, index_map)
}

function build_tree(post, index_map) {
  if (!index_map[post['id']] || index_map[post['id']].length == 0) {
    return [post]
  }

  const temp = index_map[post['id']].reduce((posts, currentPost) => [...posts, ...build_tree(currentPost, index_map)]
    , [])

  return [post, ...temp]
}

module.exports = {
  orderPosts
}