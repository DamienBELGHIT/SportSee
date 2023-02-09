import React from "react"
import ReactDOM from "react-dom/client"
import Profile from "./pages/Profile/index.jsx"
import Headers from "./components/Headers/index.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route path="user/:userID" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
