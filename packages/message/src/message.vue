<template>
  <div class="message">
    {{ message }}
  </div>
</template>
 
<script>
// import './index.scss'
export default {
  name: 'v-message',    // 申明组件的 name属性
  props: {
    message: String
  }
}
</script>
<style scoped>

</style>