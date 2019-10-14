<template>
  <div>
    <transition name="slide-up">
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
    },
    methods: {}
  }
</script>