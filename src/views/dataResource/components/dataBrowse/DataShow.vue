<template>
  <h2>数据</h2>
  <div class="container">
    <h4 class="totall">
      {{ all }} 项数据可用，涵盖 {{ all }} 名参与者，使用 Data-Coding 1007 编码
    </h4>
    <div id="chart"></div>
    <h4 class="time">参与者/项目的计数最后更新于{{ time }}。</h4>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
// import table from '../data/table.json'
export default {
  setup() {
    const all = ref("317,677");
    const time = ref("2022年2月10日");
    onMounted(() => {
      var chart = echarts.init(document.getElementById("chart"));
      chart.setOption({
        title: {
          subtext: "单位：千",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "\n可用账户\n\n（邮件地址有效）",
              "\n无法使用账户\n\n（邮箱地址获取失败或注销）",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            max: 300,
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "25%",
            label: {
              show: true,
              position: "top",
              fontSize: 16,
            },
            data: [274.356, 24.356],
            color: "#1e9bb6",
          },
        ],
      });
    });
    return {
      all,
      time,
    };
  },
};
</script>

<style scoped>
.container {
  width: 48vw;
  border: 1px solid #dfe1e4;
  min-width: 640px;
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
</style>
