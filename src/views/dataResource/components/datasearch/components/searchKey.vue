<script>
export default {
  data() {
    return {
      list: [
        {
          name: "数据字段",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit . Aenean euismod bibendum laoreet . Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
        },
        {
          name: "数据编码",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
        },
        {
          name: "数据分类",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Socis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
        },
        {
          name: "数据资源",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Socis natoque penatibus et magnis dis parturient montes , nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
        },
        //底下那一坨
      ],
    };
  },
  methods: {
    //底下那一坨的触发
    clickkey() {
      console.log("clickkey");
    },
  },
};
</script>
<template>
  <div id="searchtable">
    <li class="searchKey" v-for="(item, index) in list" @click="clickkey">
      <h3>{{ item.name }}</h3>
      <span>{{ item.content }}</span>
    </li>
  </div>
</template>

<style scoped>
#searchtable {
  margin: 4vh auto 4vh auto;
  width: 78vw;
}
.searchKey {
  background-color: #ffffff;
  margin: 4vh;
  list-style: none;
  padding: 4vh;
  padding-top: 2vh;
}
.searchKey h3 {
  margin-bottom: 2vh;
  color: #303333;
}
.searchKey span {
  font-size: 15px;
  color: #565b5c;
}
</style>
