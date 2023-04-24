<template>
  <h2>数据</h2>
  <div class="container">
    <h4 class="totall">有 {{all}} 项数据可用，涵盖 {{all}} 名参与者，单位是岁。</h4>
    <div class="charts">
      <div id="chart"></div>
      <ul class="detail">
        <li>有37个不同的值</li>
        <li>平均值=56.5295</li>
        <li>标准偏差=8.09498</li>
      </ul>
    </div>
    <table id="tab" border="1">
      <thead>
        <tr>
          <th v-for="th in tables" :key="th.id">{{th.th}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="td in tables" :key="td.id">{{td.td}}</td>
        </tr>
      </tbody>
    </table>
    <h4 class="time">参与者/项目的计数最后更新于{{time}}。</h4>
  </div>
</template>

<script>
import * as echarts from "echarts"
import { onMounted, ref ,reactive} from 'vue'
// import table from "../data/table.json"
export default {
    setup() {
      const all = ref('317,677')
      const time = ref('2022年2月10日')
      const tables = reactive([
        {
        "id": 1,
        "th": "最小值",
        "td": 37
        },
        {
            "id": 2,
            "th": "1/10",
            "td": 44
        },
        {
            "id": 3,
            "th": "2/10",
            "td": 48
        },
        {
            "id": 4,
            "th": "3/10",
            "td": 52
        },
        {
            "id": 5,
            "th": "4/10",
            "td": 55
        },
        {
            "id": 6,
            "th": "中位数",
            "td": 58
        },
        {
            "id": 7,
            "th": "6/10",
            "td": 60
        },
        {
            "id": 8,
            "th": "7/10",
            "td": 62
        },
        {
            "id": 9,
            "th": "8/10",
            "td": 64
        },
        {
            "id": 10,
            "th": "9/10",
            "td": 67
        },
        {
            "id": 11,
            "th": "最大值",
            "td": 73
        }
      ])
      onMounted(() => {
          var chart = echarts.init(document.getElementById('chart'));
          chart.setOption({
                    title: {
                    subtext: '单位：千',
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
                        data: [ '', 37, '', '', '', '', '', '', '', '', '', '', '',
                        '', '', '', '', '', '', '', '', '', 73],
                        axisTick: {
                          alignWithLabel: true
                        }
                      }
                    ],
                    yAxis: [
                      {
                        type: 'value',
                        max: 300,
                        min: 0
                      }
                    ],
                    series: [
                      {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '101%',
                        data: [0, 60, 120, 130, 140, 150, 160, 170, 180, 190,
                        200, 210, 220, 250, 280, 260, 240, 230, 210, 190, 170, 30],
                        color: '#1296b3'
                      }
                    ]
            })
      })
      return {
        all, time, tables, // table
      }
    }
}
</script>

<style scoped>
#tab  {
   
    margin-left: 1.5vw;
  }
  
  th, td {
    padding: 0.5vh 0.5vw;
  }

  .container {
    width: 48vw;
    min-width:  640px;
    border: 1px solid #dfe1e4;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
  }

  .totall {
    color: #797d7e;
    font-weight: 500;
    padding-left: 40px;
  }

  .time {
    color: #aaaeae;
    font-weight: 500;
    padding-left: 40px;
  }

  #chart {
    left: 40px;
    width: 600px;
    height: 400px;
  }

  .charts {
    display: flex;
  }

  .detail {
    color: #828586;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 75px;
    margin-bottom: 100px;
  }

  .detail li {
    margin-bottom: 10px;
  }


  table, th, td {
    border-collapse: collapse;
    text-align: center;
    border: 1px solid #edeff1;
  }

  th {
    font-weight: 500;
    color: #8f9495;
  }
</style>