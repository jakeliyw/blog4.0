<template>
  <div>
    <header-title :title="title"/>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="博客名称"
              single-line
              outlined
              v-model="upblog.title"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="博客副内容"
              single-line
              outlined
              v-model="upblog.subContent"
            ></v-text-field>
          </v-col>
        </v-row>
        <mavon-editor v-model="upblog.content"/>
        <div class="my-2">
          <v-btn large color="teal" @click="postBlog" class="newtitle">发表博客</v-btn>
        </div>
      </v-container>
    </v-form>
    <!--            弹窗提示-->
    <v-snackbar
      :color="color"
      v-model="snackbar"
      :multi-line="multiLine"
      :top="y === 'top'"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="color"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'update',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '文章更新',
    multiLine: true,
    color: '',
    y: 'top',
    snackbar: false,
    text: '',
    upblog: [
      {
        title: '',
        subContent: '',
        content: '',
        createtime: '',
        author: '',
      },
    ],
  }),
  mounted () {
    this.getupdate()
  },
  methods: {
    async getupdate () {
      const detailid = this.$store.state.detail.id.id
      if (!detailid) {
        return
      }
      const { data: res } = await this.$http.get('/api/blog/detail', {
        params: {
          id: detailid,
        },
      }, this.upblog)
      if (res.errno !== 0) {
        this.text = '获取数据操作错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.upblog = res.data
    },
    async postBlog () {
      const upDateid = this.$store.state.detail.id.id
      const { data: res } = await this.$http.post(`/api/blog/update?id=${upDateid}`, this.upblog)
      if (res.errno !== 0) {
        this.text = '更新博客错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.$router.push({ name: 'article' })
    },
  },
}
</script>
<style scoped lang="scss">
@import "../../../style/Admin";

.admin {
  @include Admin;
}
.newtitle{
  color: white;
}
.v-note-wrapper{
  position: static;
}
</style>
