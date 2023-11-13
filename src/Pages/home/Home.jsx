import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./Home.css"
import { userData } from "../../dummydata"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
export default function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm /> 
        <WidgetLg />
      </div>
    </div>
  )
}
