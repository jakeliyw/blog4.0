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
<!--        富文本编辑器-->
        <mavon-editor v-model="upblog.content" />
        <div class="my-2">
          <v-btn large color="teal" @click="up" class="btn-title">发表博客</v-btn>
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
  name: 'newBlog',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '文章新建',
    multiLine: true,
    color: '',
    y: 'top',
    snackbar: false,
    text: '',
    upblog: {
      title: '',
      subContent: '',
      content: '',
      createtime: '',
      author: '',
    },
  }),
  methods: {
    async up () {
      if (!this.upblog.title.trim()) {
        this.text = '请输入标题'
        this.color = 'error'
        this.snackbar = true
        return
      }
      const { data: res } = await this.$http.post('/api/blog/new', this.upblog)
      if (res.errno !== 0) {
        this.text = '添加博客失败'
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

.btn-title{
  color: white;
}
</style>
