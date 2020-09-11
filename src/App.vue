<template>
  <v-app>
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style lang="scss">
#nprogress .bar {
  background: #F9D741 !important; //自定义颜色
}
::selection {
  color: #fff;
  background: teal;
}
</style>
