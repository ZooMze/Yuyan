<template>
  <div>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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