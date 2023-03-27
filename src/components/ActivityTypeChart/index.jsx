import PropTypes from "prop-types"
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  ResponsiveContainer,
} from "recharts"

import "./index.css"

/**
 * Component for showing the progress of the user in each activity type as a RadarChart.
 *
 * @component
 */
export default function ActivityTypeChart({ data }) {
  return (
    <div className="activity-type-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="68%" data={data}>
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

ActivityTypeChart.propTypes = {
  /**
   * User's score for each activity kind
   * @example
   * [{value: 90, kind: 'Intensité'}, {value: 200, kind: 'Vitesse'}, ...]
   */
  data: PropTypes.arrayOf(PropTypes.object),
}
