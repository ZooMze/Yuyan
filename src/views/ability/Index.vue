<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      console.log(this.$route.meta.keepAlive)
    },
    methods: {}
  }
</script>