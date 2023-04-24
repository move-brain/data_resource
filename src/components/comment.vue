<template>
  <div id="commentMain">
    <h2>{{ dataComment[0].title }}</h2>
    <div id="comment">{{ dataComment[0].comment }}</div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  dataComment:{           //定义props
      type:Object
  }
})
let dataComment = reactive(props.dataComment)

</script>

<style lang="scss" scoped>
#commentMain {
    width: 48vw;
    min-width: 640px;
}

#comment {
    border: 2px solid #e8eaec;
    white-space:pre-wrap;
    padding-top: 3vh;
    padding-left: 2.2vw;
    padding-bottom: 3vh;
    font-size: 0.7vw;
}
</style>