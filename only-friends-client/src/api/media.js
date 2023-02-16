export async function uploadMedia(file) {
  const api_url = `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/media/upload`

  var formdata = new FormData();
  formdata.append('image', file);


  const res = await fetch(api_url, { method: 'POST', body: formdata })
  const uploadedFile = await res.json()

  return `${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/media/${uploadedFile.filename}`

}