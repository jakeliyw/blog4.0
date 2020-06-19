<template>
  <div class="admin">
    <div class="nav-title">
      <h2 class="page-title">关于博客</h2>
      <v-divider></v-divider>
    </div>
    <div class="container">
      <p>
        记得第一次萌生写博客的时候是2019年，当时因为事情多！索性就自己搭了个Hexo的博客！后来发现用别人的框架和主题非常不便，诸多风格不适合自己，且更新太慢。索性自己写一个，一来方便二来也不至于受制于人，
        想怎么加需求就怎么加需求，做自己的甲方岂不美哉。
      </p>
      <p>当然过程是幸苦的，中间也遇到了很多困难！运用的技术也是换来换去，前端采用Vue三件套,UI框架从国内的饿了么框架到尤大推荐的Vuetify，虽然官方文档有点坑但还是一个键一个键的
        敲下去。后台采用的是nodejs+express+mongodb 搭配很多的中间件，采用前后端分离模式开发。
      </p>
      <p>
        小站是我总结经验，分享自己感兴趣的地方！因为它承载我的灵魂，也是我做IT这行的开始。当然，内容质量不是很高，纯属小打小闹,有感兴趣的同行可以加下微信并加以备注说明，交流下经验！
      </p>
      <img :src="require('@/assets/image/wechat.jpg')">
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
@import "../../style/Admin";
.admin{
  @include Admin;
}

img {
  width: 240px;
  height: 240px;
}
</style>
