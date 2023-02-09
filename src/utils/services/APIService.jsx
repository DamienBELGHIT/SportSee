import fetchUserData from "../fetchUserData"
import userFactory from "../../factories/user"

async function getUserData(userID) {
  const { data } = await fetchUserData(`http://localhost:3000/user/${userID}`)
  return data
}

async function getUserActivity(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/activity`
  )
  return data
}

async function getUserAverageSessions(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/average-sessions`
  )
  return data
}

async function getUserPerformance(userID) {
  const { data } = await fetchUserData(
    `http://localhost:3000/user/${userID}/performance`
  )
  return data
}

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

  console.log(userModel.getUserObject())
  return userModel.getUserObject()
}

export { getAllUserData }
