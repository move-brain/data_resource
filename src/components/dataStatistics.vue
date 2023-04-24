<template>
<div class="container">
  <h1>数据统计</h1>
  <div class="charts" >
    <div id="chartOne"></div>
    <div id="chartTwo"></div>
    <div id="chartThree"></div>
    <div id="chartFour"></div>
    <div id="chartFive"></div>
    <div id="chartSix"></div>
  </div>
</div>
</template>

<script>
import * as echarts from "echarts"
import { onMounted ,onBeforeMount, onBeforeUnmount, ref} from 'vue'
export default {
    setup() {

      onMounted(() => {
          console.log(1111+'kkkkkkk');
            var chartOne = echarts.init(document.getElementById('chartOne'));
            chartOne.setOption({
                  title: {
                    text: '折线图',
                    textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                    },
                  },
                  tooltip: {
                    trigger: 'axis'
                  },
                //   legend: {
                //     data: ['图例1', '图例2', '图例3', '图例4']
                //   },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                  },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                  },
                  yAxis: {
                    type: 'value',
                    min: 0,
                  },
                  series: [
                    {
                      name: '图例1',
                      type: 'line',
                      data: [120, 119, 119, 119, 118, 124, 129, 142, 149, 170, 176, 182],
                      color: 'rgb(19, 161, 191)',
                      symbol: "none"
                    },
                    {
                      name: '图例2',
                      type: 'line',
                      data: [180, 182, 191, 199, 204, 210, 213, 216, 230, 252, 286, 309],
                      color: 'rgb(243, 164, 84)',
                      symbol: "none"
                    },
                    {
                      name: '图例3',
                      type: 'line',
                      data: [280, 262, 271, 272, 272, 270, 267, 277, 278, 279, 276, 271],
                      color: 'rgb(118, 132, 161)',
                      symbol: "none"
                    },
                    {
                      name: '图例4',
                      type: 'line',
                      data: [330, 392, 411, 384, 360, 367, 375, 355, 365, 370, 405, 392],
                      color: 'rgb(92, 137, 230)',
                      symbol: "none"
                    }
                  ]
            })

            var chartTwo = echarts.init(document.getElementById('chartTwo'));
            chartTwo.setOption({
                title: {
                    text: '柱状图',
                    textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                    },
                  },
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                  },
                  xAxis: [
                    {
                      type: 'category',
                      data: ['标题1', '标题2', '标题3', '标题4', '标题5', '标题6'],
                      axisTick: {
                        alignWithLabel: true
                      }
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: 'Direct',
                      type: 'bar',
                      barWidth: '50%',
                      data: [180, 322, 120, 444, 180, 227],
                      color: 'rgb(30, 165, 194)',
                    }
                  ]
            })
        
            var chartThree = echarts.init(document.getElementById('chartThree'));
            chartThree.setOption({
                  title: {
                    text: '饼状图',
                    textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                    },
                  },
                  tooltip: {
                    trigger: 'item'
                  },
                  series: [
                    {
                      name: 'Access From',
                      type: 'pie',
                      radius: '50%',
                      data: [
                        { value: 7, name: '图例一' },
                        { value: 35, name: '图例二' },
                        { value: 40, name: '图例三' },
                        { value: 20, name: '图例四' },
                        { value: 15, name: '图例五' },
                      ],
                      itemStyle: {
                        normal: {
                          color: function (colors) {
                            var colorList = [
                              '#2eb8e6',
                              '#5c89e6',
                              '#13a1bf',
                              '#29ccb0',
                              '#907fe6'
                            ];
                            return colorList[colors.dataIndex];
                          }
                        },
                      },
                      emphasis: {
                        itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                      }
                    }
                  ]
            })
        
            var chartFour = echarts.init(document.getElementById('chartFour'));
            chartFour.setOption({
                title: {
                  text: '双轴图',
                  textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                    },
              },
              tooltip: {
                trigger: 'axis',
              },
              grid: {
                right: '20%'
              },
              xAxis: [
                {
                  type: 'category',
                  axisTick: {
                    alignWithLabel: true
                  },
                  // prettier-ignore
                  data: ['标题', '标题', '标题', '标题', '标题', '标题', '标题', '标题', '标题', '标题', '标题']
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  position: 'right',
                  alignTicks: true,
                  axisLine: {
                    lineStyle: {
                      color: '#2b2b2c'
                    }
                  },
                  axisLabel: {
                    formatter: '{value}%'
                  }
                },
                {
                },
                {
                  type: 'value',
                  position: 'left',
                  alignTicks: true,
                  axisLine: {
                    lineStyle: {
                      color: '#2b2b2c'
                    }
                  },
                  axisLabel: {
                    formatter: '{value}k'
                  }
                }
              ],
              series: [
                {
                  name: 'Evaporation',
                  type: 'bar',
                  barWidth: '60%',
                  data: [38, 46, 24, 87, 36, 47, 76, 50, 44, 24, 46],
                  color: '#1ea5c2'
                },
                {
                  name: 'Temperature',
                  type: 'line',
                  yAxisIndex: 2,
                  symbol: "none",
                  smooth: true,
                  data: [218, 258, 319, 379, 434, 450, 420, 364, 298, 246, 200],
                  color: '#5c89e6'
                }
              ]
            })
        
            var chartFive = echarts.init(document.getElementById('chartFive'));
            chartFive.setOption({
              title: {
                text: '面积图',
                textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                },
              },
                  xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                  },
                  yAxis: {
                    type: 'value',
                    axisLabel: {
                      formatter: '{value}k'
                    }
                  },
                  tooltip: {
                    trigger: 'axis',
                  },
                  series: [
                    {
                      data: [140, 160, 170, 174, 165, 150, 140, 128, 110, 100, 110, 120, 110],
                      symbol: 'none',
                      type: 'line',
                      color: '#13a1bf',
                      areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, color: '#6ccee3' 
                            }, {
                                offset: 1, color: 'white'
                            }]), // 背景渐变色
                        },
                      },
                    },
                    {
                      data: [118, 120, 122, 100, 95, 140, 160, 171, 180, 200, 220, 240, 260],
                      symbol: 'none',
                      type: 'line',
                      color: '#5c89e6',
                      areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, color: '#9ebdfe' 
                            }, {
                                offset: 1, color: 'white'
                            }]), // 背景渐变色
                        },
                      },
                    }
                  ]
            })
        
            var chartSix = echarts.init(document.getElementById('chartSix'));
            const dataBJ = [
              [32, 20, 19],
              [34, 7, 4],
              [30, 12, 166],
              [36, 10, 19],
              [37, 13, 21],
              [38, 15, 66],
              [40, 12, 40],
              [42, 10, 22],
              [44, 21, 16],
            ];
            const dataGZ = [
              [31, 7, 27],
              [34.8, 14, 8],
              [37, 17, 42],
              [40, 7, 68],
              [44, 15, 32],
              [45.4, 19.4, 11],
              [48, 17, 54],
            ];
            const dataSH = [
              [27, 20, 35],
              [34, 17, 15],
              [37, 7, 20],
              [42, 20.8, 12],
              [42.6, 17.5, 28],
              [43.5, 17.8, 34],
              [46, 13, 59],
              [47, 7, 13],
            ];
            const itemStyle = {
              opacity: .8,
            };
            chartSix.setOption({
              title: {
                text: '气泡图',
                textStyle: {
                      color: '#000',
                      fontSize: 14,
                      fontWeight: 500,
                },
              },
              color: ['#9ed7e2', '#c1d0f1', '#f4d3b2'],
              grid: {
                left: '10%',
                right: 150,
                top: '18%',
                bottom: '10%'
              },
              tooltip: {
                backgroundColor: 'rgba(255,255,255,0.7)',
              },
              xAxis: {
                type: 'value',
                min: 25,
              },
              yAxis: {
                type: 'value',
                max: 25,
              },
              visualMap: [
                {
                  show: false,
                  dimension: 2,
                  min: 0,
                  itemWidth: 0,
                  itemHeight: 0,
                  max: 250,
                  inRange: {
                    symbolSize: [5, 100]
                  },
                },
              ],
              series: [
                {
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataBJ
                },
                {
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataSH
                },
                {
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: dataGZ
                }
              ]
            })
        })
    },
}
</script>

<style scoped>
  .container {
    margin-top: 40px;
  }

  h1 {
    font-size: 22px;
  }

  .charts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 38px;
  }

  #chartOne, #chartTwo, #chartThree, #chartFour, #chartFive {
    padding-left: 10px;
    width: 300px;
    height: 250px;
  }
  #chartSix {
    margin-left: 30px;
    width: 350px;
    height: 200px;
  }
</style>