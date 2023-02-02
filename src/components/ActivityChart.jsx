import React, { PureComponent } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import "../styles/ActivityChart.css"

export default function ActivityChart({ data }) {
  return (
    <div className="activity-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 5" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[100, 100, 0, 0]}
            barSize={7}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[100, 100, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
