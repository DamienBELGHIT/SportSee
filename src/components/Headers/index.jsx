import { Outlet } from "react-router-dom"

import "./index.css"

export default function Headers() {
  return (
    <div>
      <header>Hello</header>
      <Outlet />
    </div>
  )
}
