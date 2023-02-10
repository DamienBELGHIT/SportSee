import fetchUserData from "../fetchUserData"
import userFactory from "../../factories/user"

/**
 * Fetch the user main data from API
 * @param {String} userID The ID of the user passed in the URL
 * @returns {Object} The main data of the user
 */
async function getUserData(userID) {
  const { data } = await fetchUserData(`http://localhost:3000/user/${userID}`)
  return data
}

/**
 * Fetch the user activity data from API
 * @param {String} userID The ID of the user passed in the URL
 * @returns {Object} The activity data of the user
 */
async function getUserActivity(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/activity`
  )
  return data
}

/**
 * Fetch the user average session data from API
 * @param {String} userID The ID of the user passed in the URL
 * @returns {Object} The average session data of the user
 */
async function getUserAverageSessions(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/average-sessions`
  )
  return data
}

/**
 * Fetch the user performance session data from API
 * @param {String} userID The ID of the user passed in the URL
 * @returns {Object} The performance data of the user
 */
async function getUserPerformance(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/performance`
  )
  return data
}

/**
 * Fetch all user data from API and use the factory to put it in the right formatx
 * @param {String} userID The ID of the user passed in the URL
 * @returns {UserObject} The user data as an object
 */
async function getAllUserData(userID) {
  const main = await getUserData(userID)
  const performance = await getUserPerformance(userID)
  const averageSession = await getUserAverageSessions(userID)
  const activity = await getUserActivity(userID)

  const userModel = await userFactory({
    main: main,
    performance: performance,
    activity: activity,
    average_session: averageSession,
  })
  return userModel.getUserObject()
}

export { getAllUserData }
