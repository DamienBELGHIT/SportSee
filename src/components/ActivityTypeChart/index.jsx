import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
} from "recharts"

import "./index.css"

export default function ActivityTypeChart({ data }) {
  return (
    <div className="activity-type-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="60%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            fontSize={12}
            tick={{ fill: "white" }}
          />
          <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
