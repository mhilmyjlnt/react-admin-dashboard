import { Link } from "react-router-dom"
import { ResponsiveContainer } from "recharts"
import { Line } from "recharts/types/cartesian/Line"
import { LineChart } from "recharts/types/chart/LineChart"
import "./chartBox.scss"

type Props = {
  color:string;
  icon:string;
  title:string;
  dataKey:string;
  number:number | string;
  percentage: number;
  chartData:object[]
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src="/user.svg" alt="" />
          <span>total user</span>
        </div>
        <h1>11.212</h1>
        <Link to="/">
        View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={props.chartData} width={300} height={100}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage">30%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox