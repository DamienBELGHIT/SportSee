export function userFactory(data) {
  const main = data.main.data

  function getUserObject() {
    return {
      firstName: main.userInfos.firstName,
      lastName: main.userInfos.lastName,

      calorieCount: main.keyData.calorieCount,
      lipidCount: main.keyData.lipidCount,
      carbohydrateCount: main.keyData.carbohydrateCount,
      proteinCount: main.keyData.proteinCount,
    }
  }

  return { getUserObject }
}
