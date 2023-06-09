import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    //console.log(props.dataPoints)
 const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
 //console.log(dataPointValue)
 const totalMaximun = Math.max(...dataPointValue)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
