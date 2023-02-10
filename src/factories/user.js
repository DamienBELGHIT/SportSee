/**
 * Transform the data to match the user format
 * @param {UserObject} data Contains all data from the user
 * @returns A function allowing to get all the user data as an object
 */
export default function userFactory(data) {
  const main = data.main.data

  //Translates and format the activity data for the LineChart
  const tickDays = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  }
  const activityDatas = data.average_session.data.sessions
  activityDatas.map((dataElem) => {
    dataElem.day = tickDays[dataElem.day]
  })

  //Translates and format the performance data for the RadarChart
  const performanceKinds = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }
  const performanceDatas = data.performance.data.data
  performanceDatas.reverse().map((dataElem) => {
    dataElem.kind = performanceKinds[dataElem.kind]
  })

  /**
   * Get all user data as an object
   */
  function getUserObject() {
    return {
      firstName: main.userInfos.firstName,
      lastName: main.userInfos.lastName,

      score: main.score || main.todayScore,

      calorieCount: main.keyData.calorieCount,
      lipidCount: main.keyData.lipidCount,
      carbohydrateCount: main.keyData.carbohydrateCount,
      proteinCount: main.keyData.proteinCount,

      activity: data.activity.data.sessions,
      average_session: activityDatas,
      performance: performanceDatas,
    }
  }

  return { getUserObject }
}
