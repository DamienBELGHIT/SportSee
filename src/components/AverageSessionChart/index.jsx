import PropTypes from "prop-types"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts"

import "./index.css"

/**
 * Custom tooltip showing the sessions duration in minutes of the selected day.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-session-tooltip">
        <span>{payload[0].value + "min"}</span>
      </div>
    )
  }

  return null
}

/**
 * Custom tooltip cursor darkening the graph past it.
 */
const CustomCursor = ({ points, width }) => {
  const { x } = points[0]
  return (
    <Rectangle
      fill="black"
      fillOpacity={0.1}
      x={x}
      width={width}
      height={300}
    />
  )
}

/**
 * Component for showing the average session duration of the user as a LineChart.
 *
 * @component
 */
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
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="white"
              strokeOpacity={0.7}
              dot=""
              strokeWidth="2"
            />
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.5)"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={false}
              width={0}
            />
            <Tooltip content={CustomTooltip} cursor={<CustomCursor />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

AverageSessionChart.propTypes = {
  /**
   * User's session duration for each day
   * @example
   * [{day: 'L', sessionLength: 30}, {day: 'M', sessionLength: 23}, ...]
   */
  data: PropTypes.arrayOf(PropTypes.object),
}
