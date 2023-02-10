/**
 * Try to fetch data from the API and log error if failed
 * @param {String} url The URL passed to the API
 * @returns {Object} Object containing the data fetched
 */
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
