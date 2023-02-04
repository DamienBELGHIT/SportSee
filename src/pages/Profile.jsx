import { useParams } from "react-router-dom"
import { userFactory } from "../factories/user"
import {
  activity,
  main_data,
  average_session,
  performance,
} from "../mock/data.js"
import KeyData from "../components/KeyData"
import ActivityChart from "../components/ActivityChart"
import AverageSessionChart from "../components/AverageSessionChart"
import ActivityTypeChart from "../components/ActivityTypeChart"
import ScoreChart from "../components/ScoreChart"
import "../styles/Profile.css"

function Profile() {
  const { userID } = useParams()
  const user = userFactory({
    main: main_data,
    activity: activity,
    average_session: average_session,
    performance: performance,
  }).getUserObject()
  return (
    <main className="profile-main">
      <h1>
        Bonjour <span className="profile-name">{user.firstName}</span>
      </h1>

      <div id="profile-description">
        <div className="charts">
          <ActivityChart data={user.activity} />
          <div className="mini-charts">
            <AverageSessionChart data={user.average_session} />
            <ActivityTypeChart data={user.performance} />
            <ScoreChart data={[{ score: user.score, fill: "red" }]} />
          </div>
        </div>

        <div className="keyDatas">
          <KeyData type="Calories" value={user.calorieCount} />
          <KeyData type="Protéines" value={user.proteinCount} />
          <KeyData type="Glucides" value={user.carbohydrateCount} />
          <KeyData type="Lipides" value={user.lipidCount} />
        </div>
      </div>
    </main>
  )
}

export default Profile
