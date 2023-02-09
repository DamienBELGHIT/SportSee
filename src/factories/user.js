export default function userFactory(data) {
  const main = data.main.data

  const performanceKinds = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  }
  const performanceDatas = data.performance.data.data
  performanceDatas.map((dataElem) => {
    Number.isInteger(dataElem.kind) &&
      (dataElem.kind = performanceKinds[dataElem.kind])
  })

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
      average_session: data.average_session.data.sessions,
      performance: performanceDatas,
    }
  }

  return { getUserObject }
}
