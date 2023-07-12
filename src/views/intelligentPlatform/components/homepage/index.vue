<template>
  <div class="homepage">
    <div class="parent">
      <div class="div1">
        <div class="item" v-for="item in data" key="item.id">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="texts">
            <span class="number text1">{{ item.number }}</span>
            <span class="unit text1">{{ item.unit }}</span
            ><br />
            <span class="detail text2">{{ item.detail }}</span>
          </div>
        </div>
      </div>
      <div class="div2">
        <span class="title">数据类型分布</span>
        <div ref="chart1" id="chart1"></div>
        <div ref="chart2" id="chart2"></div>
      </div>
      <div class="div3">
        <img
          @click="clickdatamanage(item.id)"
          :src="item.img"
          alt=""
          v-for="item in aside"
          :key="item.id"
          class="cursor-pointer"
        />
      </div>
      <div class="div4">
        <div class="text1 mt-5">专题库</div>
        <div class="text2 mt-5 cursor-pointer" @click="clicksp">查看更多 ></div>
        <div class="show">
          <img :src="imgb7" alt="" class="arrow" />
          <div class="card" v-for="item in bottom" key="item.id">
            <img :src="item.img" alt="" />
            <div class="detail">{{ item.detail }}</div>
          </div>
          <img :src="imgb8" alt="" class="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";
import { useRouter } from "vue-router";
let router = useRouter();
import img1 from "@/assets/img/number.png";
import img2 from "@/assets/img/storage.png";
import img3 from "@/assets/img/field.png";
import imgb1 from "@/assets/img/bottom1.png";
import imgb2 from "@/assets/img/bottom2.png";
import imgb3 from "@/assets/img/bottom3.png";
import imgb4 from "@/assets/img/bottom4.png";
import imgb5 from "@/assets/img/bottom5.png";
import imgb6 from "@/assets/img/bottom6.png";
import imgb7 from "@/assets/img/left.png";
import imgb8 from "@/assets/img/right.png";
import aside1 from "@/assets/img/aside1.png";
import aside2 from "@/assets/img/aside2.png";
import aside3 from "@/assets/img/aside3.png";
let clicksp = () => {
  router.push({ name: "specialData" });
};
let clickdatamanage = (e) => {
  if (e == 1) {
    router.push({ name: "dataManage" });
  }
};
const data = reactive([
  {
    id: 1,
    img: img1,
    number: 125446,
    unit: "条",
    detail: "数据总条目",
  },
  {
    id: 2,
    img: img2,
    number: 3,
    unit: "TB",
    detail: "数据存储总量",
  },
  {
    id: 3,
    img: img3,
    number: 620,
    unit: "条",
    detail: "数据字段总数",
  },
]);

const bottom = reactive([
  {
    id: 1,
    img: imgb1,
    detail: "医疗信息库",
  },
  {
    id: 2,
    img: imgb2,
    detail: "基因信息库",
  },
  {
    id: 3,
    img: imgb3,
    detail: "脑疾病信息库",
  },
  {
    id: 4,
    img: imgb4,
    detail: "影响信息库",
  },
  {
    id: 5,
    img: imgb5,
    detail: "人员信息库",
  },
  {
    id: 6,
    img: imgb6,
    detail: "药品信息库",
  },
]);

const aside = reactive([
  {
    id: 1,
    img: aside1,
  },
  {
    id: 2,
    img: aside2,
  },
  {
    id: 3,
    img: aside3,
  },
]);

const chart1 = ref(null);
const chart2 = ref(null);
onMounted(() => {
  const myChart1 = echarts.init(chart1.value);
  const myChart2 = echarts.init(chart2.value);
  const options1 = {
    title: [
      //   {
      //     text: "数据类型分布",
      //   },
      {
        text: `{name|总数}\n{val|18,004}`,
        top: "center",
        left: "center",
        textStyle: {
          rich: {
            name: {
              fontSize: 12,
              color: "#666666",
              padding: [10, 0],
            },
            val: {
              fontSize: 22,
              // fontWeight: '',
              color: "#333333",
            },
          },
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
    //   legend: {
    //     top: 'bottom',
    //     left: 'center',
    //     icon: 'circle',
    //     fontSize: 50,
    //     padding: [10, 1]
    //   },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["54%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          normal: {
            borderColor: "#fff",
            borderWidth: 3,
            formatter: "{total|" + 200 + "}" + "\n\r" + "{active|共发布活动}",
            color: function (colors) {
              var colorList = [
                "#5c89e6",
                "#2eb7e6",
                "#13a0bf",
                "#29ccb0",
                "#9f7ede",
              ];
              return colorList[colors.dataIndex];
            },
          },
        },
        label: {
          normal: {
            //下面三条语句设置了让文字显示在标线上
            formatter: "{b}\n\n",
            padding: [0, -40],
            fontSize: 10,
            alignTo: "labelLine",
            textStyle: {
              color: "#727677", // 改变标示文字的颜色
            },
          },
        },
        emphasis: {
          label: {
            show: true,
            //   fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          normal: {
            length: 10, //第一段表示线
            length2: 50, // 第二段标示线
          },
        },
        data: [
          { value: 78, name: "产品A" }, //  4,544（25％）
          { value: 75, name: "产品B" }, // 4,544（25％）
          { value: 80, name: "产品C" }, // 4,544（25％）
          { value: 44, name: "产品D" }, // 2,341（13％）
          { value: 30, name: "产品E" }, // 2,031（12%）
        ],
      },
    ],
  };
  const options2 = {
    title: {
      text: "数据更新状态",
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
          "04.15",
          "04.16",
          "04.17",
          "04.18",
          "04.19",
          "04.20",
          "04.21",
          "04.22",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "23%",
        data: [2800, 4500, 9000, 3000, 6300, 4500, 1700, 3700],
        color: "#1e9bb6",
      },
    ],
  };
  myChart1.setOption(options1);
  myChart2.setOption(options2);
});
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  height: 92vh;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.parent {
  display: grid;
  grid-template-columns: 1.8fr 0.7fr;
  grid-template-rows: 1fr 2.5fr 1.5fr;
  grid-column-gap: 12px;
  grid-row-gap: 10px;
  width: 98%;
  height: 88vh;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 8vh;
  }
  .item {
    // margin-top: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      padding-right: 2vh;
    }
    .number {
      font-size: 18px;
      font-weight: 700;
    }
    .unit {
      font-size: 12px;
    }
    .detail {
      font-size: 12px;
    }
  }
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .title {
    position: absolute;
    color: #484848;
    top: 13px;
    left: 15px;
    z-index: 2;
    font-weight: 700;
  }
  #chart1 {
    z-index: 1;
    width: 300px;
    height: 200px;
    background-color: #fff;
    margin-top: 5vh;
  }
  #chart2 {
    width: 300px;
    height: 200px;
    // scale: .8;
  }
}
.div3 {
  grid-area: 1 / 2 / 3 / 3;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    height: 15vh;
  }
}
.div4 {
  grid-area: 3 / 1 / 4 / 3;
  background-color: #fff;
  position: relative;
  //   margin-top: 5vh;
  .text1 {
    font-weight: 700;
    padding-left: 2vh;
  }
  .text2 {
    position: absolute;
    right: 2vh;
    top: 0;
    font-size: 11px;
    color: grey;
  }
  .show {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2vh;
    .arrow {
      width: 5vh;
    }
    .card {
      width: 25vh;
      height: 20vh;
      background-color: #f5f7fa;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3vh;
      img {
        width: 5vh;
      }
      .detail {
        font-size: 11px;
      }
    }
    .card:hover {
      background-color: #eef8fa;
      border-color: #47b3c9 !important;
    }
  }
}
</style>
