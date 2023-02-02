import { useParams } from "react-router-dom"
import { userFactory } from "../factories/user"
import { activity, main_data } from "../mock/data.js"
import KeyData from "../components/keyData"
import ActivityChart from "../components/ActivityChart"
import "../styles/Profile.css"

function Profile() {
  const { userID } = useParams()
  const user = userFactory({ main: main_data }).getUserObject()
  return (
    <main>
      <h1>
        Bonjour <span className=".profile-name">{user.firstName}</span>
      </h1>
      <ActivityChart data={activity.data.sessions} />
      <KeyData type="Calories" value={user.calorieCount} />
      <KeyData type="Lipides" value={user.lipidCount} />
      <KeyData type="Glucides" value={user.carbohydrateCount} />
      <KeyData type="Protéines" value={user.proteinCount} />
    </main>
  )
}

export default Profile
