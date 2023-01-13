export async function getPosts(promptId) {
  const api_url = `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/posts/${promptId}`
  const res = await fetch(api_url)
  const posts = await res.json()

  return posts
}

export async function getPrompts() {
  const api_url = `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/posts`
  const res = await fetch(api_url)
  const posts = await res.json()

  return posts
}

export async function addPost(searchParams) {
  const params = new URLSearchParams(searchParams)
  const api_url = `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/posts?${params}`
  const res = await fetch(api_url, { method: 'POST' })

  console.log(res)
}