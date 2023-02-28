import { Link, Outlet } from "react-router-dom"

import "./index.css"
import logo from "../../assets/images/logo.png"
import zenIcon from "../../assets/images/navIcon/Zen.png"
import swimIcon from "../../assets/images/navIcon/Swim.png"
import rideIcon from "../../assets/images/navIcon/Ride.png"
import muscleIcon from "../../assets/images/navIcon/Muscle.png"

/**
 * Component for showing the top and side navigation headers.
 *
 * @component
 */
export default function Headers() {
  return (
    <div>
      <header>
        <div className="horizontal-header">
          <div className="main-logo">
            <img src={logo} alt="SportSee" />
          </div>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/user/12">Profil</Link>
            <Link to="/settings">Réglages</Link>
            <Link to="/community">Communauté</Link>
          </nav>
        </div>

        <div className="vertical-header">
          <nav>
            <Link to="/meditation">
              <img src={zenIcon} alt="Meditation" />
            </Link>
            <Link to="/swimming">
              <img src={swimIcon} alt="Swimming" />
            </Link>
            <Link to="/bikeride">
              <img src={rideIcon} alt="Bike ride" />
            </Link>
            <Link to="/musculation">
              <img src={muscleIcon} alt="Musculation" />
            </Link>
          </nav>
          <span id="copyright">Copyright, SportSee 2020</span>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
