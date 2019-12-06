import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

//Random Numbers for fake data
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//This is a stand in until real data comes in
function getData(set) {
    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
      data1.push(random(50, 200));
      data2.push(random(80, 100));
      data3.push(65);
    }

    switch (set) {
      case 1: return data1;
      case 2: return data2;
      default: return data3;
    }
}

//This determines what time labels the chart will be using
function getLabels(timePeriod) {
  switch (timePeriod) {
    case "Years": 
      return ['2015', '2016', '2017', '2018', '2019'];
    case "Months":
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    case "Days":
      return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    default:
      return ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  }
}

//Returns a chart's data to be used with the Line component
//Currently just using test data
function chartData(timePeriod) {
    //Pretending to get data
    let data1 = getData(1);
    let data2 = getData(2);
    let data3 = getData(3);
    const timeLabels = getLabels(timePeriod);
    const mainChart = {
      labels: timeLabels,
      datasets: [
        {
          //UI info
          label: 'My First dataset',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          //The real data
          data: data1,
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: data2,
        },
        {
          label: 'My Third dataset',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          borderDash: [8, 5],
          data: data3,
        },
      ],
    };
    return mainChart;
}

export default chartData;
