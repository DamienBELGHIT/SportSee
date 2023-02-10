import React from "react"
import ReactDOM from "react-dom/client"
import Headers from "./components/Headers"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Headers />}>
          <Route path="user/:userID" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
