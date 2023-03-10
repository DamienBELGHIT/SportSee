import PropTypes from "prop-types"

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts"

import "./index.css"

/**
 * Custom label showing score percentage in the middle of the chart.
 */
const CustomLabel = ({ cx, cy, value }) => {
  return (
    <text
      x={cx}
      y={cy}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ wordWrap: "break-word", width: 50 }}
    >
      <tspan className="score-txt-percent" x={cx} dy="-1em">{`${
        value * 100
      }%`}</tspan>
      <tspan className="score-txt" x={cx} dy="1.5em">
        de votre
      </tspan>
      <tspan className="score-txt" x={cx} dy="1.2em">
        objectif
      </tspan>
    </text>
  )
}

/**
 * Component for showing the percentage score of the user as a RadialChart.
 *
 * @component
 */
export default function ScoreChart({ data }) {
  return (
    <div className="score-chart">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
          <RadialBar
            label={<CustomLabel />}
            dataKey="score"
            cornerRadius="100%"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ScoreChart.propTypes = {
  /**
   * User's score value and color
   * @example
   * [{score: 0.12, fill: 'red'}]
   */
  data: PropTypes.arrayOf(PropTypes.object),
}
