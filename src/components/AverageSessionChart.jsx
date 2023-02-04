import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"

import "../styles/AverageSessionChart.css"

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-session-tooltip">
        <p>{payload[0].value + "min"}</p>
      </div>
    )
  }

  return null
}

export default function AverageSessionChart({ data }) {
  return (
    <div className="average-session-chart">
      <h3>Durée moyenne des sessions</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              dot=""
              strokeWidth="2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
