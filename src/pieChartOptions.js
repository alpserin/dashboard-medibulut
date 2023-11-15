export const pieChartOptions = {
  colors: ["#2a98ec", "#4d07d0", "#44df72"],
  chart: {
    type: "pie",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  title: {
    text: "Treatments Applied",
  },
  tooltip: {
    pointFormat: "{point.y} {y} ",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "{point.name}: <b>{point.percentage:.1f}%</b>",
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "",
      colorByPoint: true,
      innerSize: "0%",
      data: [],
    },
  ],
};
