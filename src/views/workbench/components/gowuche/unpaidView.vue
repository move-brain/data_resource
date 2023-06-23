<template>
  <div class="view">
    <div class="unpaid-box">
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="selectAll" @click="selectAllChanged()"/></th>
          <th>ID</th>
          <th>题目</th>
          <th>提交时间</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="item.id">
          <td><input type="checkbox" v-model="item.selected"></td>
          <td>{{ item.longID }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>￥{{ item.price }}</td>
          <td><button @click="removeItem(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
    <div class="total">
      <span>已选择</span>
      <span class="count">{{  }}</span>
      <span>项</span>
      <span>总价: </span>
      <span class="price">￥{{ totalPrice }}</span>
      <button class="pay" @click="checkout">去支付</button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cartItems = ref([
  { id: 1, longID:4563223568, name: '脑疾病研究', price: 23040.00, time: '2022-03-12 12:00:00', selected: false },
  { id: 2, longID:4563223568, name: '脑疾病组学数据研究', price: 162000.00, time: '2022-03-12 12:00:00', selected: false },
  { id: 3, longID:4563223568, name: '脑疾病组学数据研究', price: 30000.00, time: '2022-03-12 12:00:00', selected: false },
  { id: 4, longID:4563223568, name: '脑疾病研究', price: 23040.00, time: '2022-03-12 12:00:00', selected: false },
  { id: 4, longID:4563223568, name: '脑疾病研究', price: 22500.00, time: '2022-03-12 12:00:00', selected: false },
]);

const selectAll = ref (false);

function removeItem(index) {
  cartItems.value.splice(index, 1);
}

function selectAllChanged() {
  for (let item of cartItems.value) {
    item.selected = !selectAll.value;
  }
}

const totalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.selected)
    .reduce((total, item) => total + item.price, 0);
});

function checkout() {
  alert(`你要支付 ${totalPrice.value} 元。`);
}
</script>

<style scoped>
  .view {
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 80vh;
  }
    .unpaid-box {
      width: 97%;
      background-color: #fff;
      height: 75vh;
    }
  table {
    width: 94%;
    margin: 2vh auto;
    border-collapse: collapse;
    background-color: #fff;
  }
  table tbody tr {
      text-align: center;
      color: #7c8081;
      font-size: 12px;
      border-bottom: 1px solid #e8eaed;
      height: 5vh;

    }
    table tbody tr button {
        border: none;
        background-color: #fff;
        color: #478cff;
      }
    thead th {
      background-color: #f0f2f5;
      padding: 1.3vh 0;
      text-align: center;
      color: #242727;
    }
    input[type=checkbox]{
         cursor: pointer;
         position: relative;
         width: 15px;
         height: 15px;
         font-size: 14px;
    }

    input[type=checkbox]::after{
         position: absolute;
         top: 0;
         color: #000;
         width: 15px;
         height: 15px;
         display: inline-block;
         visibility: visible;
         padding-left: 0px;
         text-align: center;
         content: ' ';
         border-radius: 2px
    }

    input[type=checkbox]:checked::after{
        content: '√';
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         font-size: 10px;
         font-weight: bold;
         background-color: #007f99;
         color: #fff;
    }
  .total {
    position: relative;
    margin-top: 5vh;
    margin-left: 72%;
    font-size: 12px;
  }

  .total button {
      border: none;
      background-color: #007f99;
      color: #fff;
      border-radius: 0.6vh;
      padding: 1vh 2.6vh;
      font-size: 13px;
      margin: 0 3vh;
    }
    .total .price {
      color: #007f99;
      font-weight: 700;
      font-size: 16px;
    }
  
    .pay {
      position: absolute;
      right: 2vh;
      margin-left: 2vh;
    }
</style>