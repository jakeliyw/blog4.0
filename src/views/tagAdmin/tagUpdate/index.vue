<template>
  <div>
    <header-title :title="title" />
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="标签名称"
              single-line
              outlined
              v-model="upTag.tags"
            ></v-text-field>
          </v-col>
        </v-row>
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
    title: '标签更新',
    multiLine: true,
    color: '',
    y: 'top',
    snackbar: false,
    text: '',
    upTag: [
      {
        tags: '',
      },
    ],
  }),
  mounted () {
    this.getupdate()
  },
  methods: {
    async getupdate () {
      const tagId = this.$store.state.detail.tagId.id
      if (!tagId) {
        return
      }
      const { data: res } = await this.$http.get('/api/blog/tagDetail', {
        params: {
          id: tagId,
        },
      }, this.upTag)
      if (res.errno !== 0) {
        this.text = '获取数据操作错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.upTag = res.data
    },
    async postBlog () {
      const tagId = this.$store.state.detail.tagId.id
      const { data: res } = await this.$http.post(`/api/blog/tagUpdate?id=${tagId}`, this.upTag)
      if (res.errno !== 0) {
        this.text = '更新博客错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.$router.push({ name: 'tagadmin' })
    },
  },
}
</script>
<style scoped lang="scss">
@import "../../../style/Admin";

.admin {
  @include Admin;
}

.newtitle {
  color: white;
}
</style>
