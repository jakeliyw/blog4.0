<template>
  <div class="admin">
    <header-title :title="title"/>
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
          项目的技术栈为 前端：Vue三件套，后端采用Koa2+Redis+MySQL。如果你对我的文章或博客有什么建议，
          欢迎点击下方微信图标，添加微信并加以备注说明。
        </p>
      </div>
    </div>
    <v-row justify="center">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="translate" @click.stop="dialog = true" color="teal" v-bind="attrs"
                  v-on="on">
            mdi-wechat
          </v-icon>
        </template>
        <span>二维码</span>
      </v-tooltip>
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
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'blogAbout',
  components: {
    HeaderTitle,
  },
  data: () => ({
    dialog: false,
    title: '关于我',
  }),
}
</script>
<style scoped lang="scss">
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
