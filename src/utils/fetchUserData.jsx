export default async function fetchUserData(url) {
  let data
  try {
    const response = await fetch(url)
    data = await response.json()
  } catch (err) {
    console.log(err)
  }
  return { data }
}
