import iconEnergy from "../../assets/images/keyDataIcons/energy.svg"
import iconBurger from "../../assets/images/keyDataIcons/burger.svg"
import iconChicken from "../../assets/images/keyDataIcons/chicken.svg"
import iconApple from "../../assets/images/keyDataIcons/apple.svg"

import "./index.css"

function KeyData({ type, value }) {
  let icon = ""
  let iconColor = ""
  switch (type) {
    case "Calories":
      icon = iconEnergy
      iconColor = "red"
      break
    case "Protéines":
      icon = iconChicken
      iconColor = "blue"
      break
    case "Glucides":
      icon = iconApple
      iconColor = "yellow"
      break
    case "Lipides":
      icon = iconBurger
      iconColor = "pink"
      break
    default:
      console.log("Error : wrong keydata type")
  }
  return (
    <div className="keydata">
      <div className={"keydata-icon " + iconColor}>
        <img src={icon} alt={type} />
      </div>
      <div className="keydata-description">
        <h2>{value + (type === "Calories" ? "kCal" : "g")}</h2>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default KeyData
