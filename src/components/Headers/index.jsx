import { Outlet } from "react-router-dom"

import "./index.css"

/**
 * Component for showing the top and side navigation headers.
 *
 * @component
 */
export default function Headers() {
  return (
    <div>
      <header>
        <div className="horizontal-header"></div>
        <div className="vertical-header"></div>
      </header>
      <Outlet />
    </div>
  )
}
