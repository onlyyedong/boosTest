import echarts from 'echarts'
import _ from 'lodash'

const mainChartFunction = (chartData, chartText) => {
  const dataList = {
    title: {
      text: '',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#F1F1F3'
      },
      left: '6%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      }
    },
    legend: {
      icon: 'rect',
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ['总量'],
      right: '4%',
      textStyle: {
        fontSize: 12,
        color: '#333'
      }
    },
    grid: {
      left: '1%',
      right: '5%',
      bottom: '8%',
      top: '14%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      splitNumber: 15,
      // scale: true,
      // boundaryGap: ['20%', '20%'],
      axisLine: {
        lineStyle: {
          color: '#BFBFBF'
        }
      },
      data: _.map(chartData, 'dt'),
      axisLabel: {
        textStyle: {
          fontSize: 10,
          color: '#333'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0)'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: 10,
          color: '#333'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#e6e6e6',
          type: 'dotted'
        }
      }
    }],
    series: [{
      name: chartText,
      type: 'line',
      smooth: true,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(125,252,86,0.3)'
          }, {
            offset: 1,
            color: 'rgba(125,252,86,0)'
          }], false),
          shadowColor: 'rgba(125,252,86,0.1)',
          shadowBlur: 10
        }
      },
      symbolSize: 4,
      itemStyle: {
        normal: {
          color: 'rgb(125,252,86)'
        }
      },
      data: _.map(chartData, 'cn')
    }]
  }
  return dataList
}

export {
  mainChartFunction
}
