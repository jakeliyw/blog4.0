<template>
  <div class="admin">
    <div class="nav-title">
      <h2 class="page-title">LYW</h2>
      <v-divider></v-divider>
    </div>
    <div class="container">
    <div class="content">
      <p>年中国制造，长cm，净重kg。采用人工智能，各部分零件齐全，运转稳定，经二十多年的运行，属质量信得过产品，
        专注前端开发！喜欢钻研新技术，目前本站的文章还是以笔记为主（质量难说，还不是很完善😂），不过以后会努力提升上来的😋。
      </p>
    </div>
    </div>
    <br>
    <div class="nav-title">
      <h2 class="page-title">关于博客</h2>
      <v-divider></v-divider>
    </div>
    <div class="container">
      <div class="content">
        <p>
          项目的技术栈为 前端：Vue三件套，后端采用koa+mysql+redis，现在托管于码云服务器。如果你对我的文章或博客有什么建议，
          欢迎点击下方微信图标，添加微信并加以备注说明。
        </p>
      </div>
    </div>
    <v-row justify="center">
      <v-icon class="translate" @click.stop="dialog = true" color="teal">
        mdi-wechat
      </v-icon>

      <v-dialog
        v-model="dialog"
        max-width="200"
        max-height="200px"
        class="dialog"
      >
        <v-card>
          <img :src="require('../../assets/image/wechat.jpg')" alt="wechat">
        </v-card>
      </v-dialog>
    </v-row>

  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>
<style scoped lang="scss">
@import "../../style/Admin";
.admin{
  @include Admin;
}
.content{
  padding: 0 10px;
}
.translate{
  margin-top: 5vw;
  font-size: 28px;
}
img{
  width: 200px;
  height: 200px;
}
.v-card{
  max-height: 200px;
}
</style>
