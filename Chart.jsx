import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartContainer.current);

    const option = {
      title: { text: 'Sales Data' },
      tooltip: {},
      xAxis: { data: ["Jan", "Feb", "Mar", "Apr"] },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [120, 200, 150, 80],
      }]
    };

    myChart.setOption(option);
  }, []);

  return <div ref={chartContainer} style={{ width: '100%', height: '400px' }}></div>;
};

export  {Chart};
