<template>
  <v-app>
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
