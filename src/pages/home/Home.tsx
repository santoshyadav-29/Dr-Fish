import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";

import { barChartBoxRevenue, barChartBoxVisit } from "../../data";
import { phValue, nitrogen, oxygen, potassium } from "../../chemicals";
import "./home.scss";
import Temperature from "../../components/temp/Temperature";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <h1>
          Temperature
        </h1>
        <Temperature />
      </div>
      <div className="box box2">
        <ChartBox chartData={phValue} />
      </div>
      <div className="box box3">
        <ChartBox chartData={nitrogen} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox chartData={oxygen} />
      </div>
      <div className="box box6">
        <ChartBox chartData={potassium} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
