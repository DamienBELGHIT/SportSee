import PropTypes from "prop-types"
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

import "./index.css"

/**
 * Custom tooltip showing the weight in kg and the calorie loss in Kcal of the selected day.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="activity-tooltip">
        <p>{payload[0].value + "kg"}</p>
        <p>{payload[1].value + "Kcal"}</p>
      </div>
    )
  }

  return null
}

/**
 * Component for showing the calories and kg change each day of the user as a BarChart.
 *
 * @component
 */
export default function ActivityChart({ data }) {
  return (
    <div className="activity-chart">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 5" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickFormatter={(value) => parseInt(value.split("-")[2])}
            tick={{ fill: "#9B9EAC" }}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9B9EAC" }}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            payload={[
              {
                id: "kilogram",
                value: "Poids (kg)",
                type: "circle",
                color: "#282D30",
              },
              {
                id: "calories",
                value: "Calories brûlées (kCal)",
                type: "circle",
                color: "#E60000",
              },
            ]}
            wrapperStyle={{
              top: -60,
              right: 20,
              lineHeight: "40px",
              width: "auto",
            }}
          />
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

ActivityChart.propTypes = {
  /**
   * User's weight and calories loss for each day
   * @example
   * [{day: '2020-07-06', kilogram: 78, calories: 162}, {day: '2020-07-07', kilogram: 76, calories: 390}, ...]
   */
  data: PropTypes.arrayOf(PropTypes.object),
}
