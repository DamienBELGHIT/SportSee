import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import KeyData from "../../components/KeyData"
import ActivityChart from "../../components/ActivityChart"
import AverageSessionChart from "../../components/AverageSessionChart"
import ActivityTypeChart from "../../components/ActivityTypeChart"
import ScoreChart from "../../components/ScoreChart"
import { getAllUserData } from "../../utils/services/APIService"

import "./index.css"

function Profile() {
  const { userID } = useParams()
  const [userData, setUserData] = useState(undefined)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(userID)
  }, [])

  async function fetchData(userID) {
    setUserData(await getAllUserData(userID))
    setLoading(false)
  }

  return (
    <main className="profile-main">
      {!isLoading && (
        <div>
          <h1>
            Bonjour <span className="profile-name">{userData.firstName}</span>
          </h1>

          <div id="profile-description">
            <div className="charts">
              <ActivityChart data={userData.activity} />
              <div className="mini-charts">
                <AverageSessionChart data={userData.average_session} />
                <ActivityTypeChart data={userData.performance} />
                <ScoreChart data={[{ score: userData.score, fill: "red" }]} />
              </div>
            </div>
            <div className="keyDatas">
              <KeyData type="Calories" value={userData.calorieCount} />
              <KeyData type="Protéines" value={userData.proteinCount} />
              <KeyData type="Glucides" value={userData.carbohydrateCount} />
              <KeyData type="Lipides" value={userData.lipidCount} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Profile
