<template>
  <div>
    <header-title :title="title" />
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="时间名称"
              single-line
              outlined
              v-model="upDate.title"
            ></v-text-field>
          </v-col>
        </v-row>
        <mavon-editor v-model="upDate.content" />
        <div class="my-2">
          <v-btn large color="teal" @click="postTime" class="newtitle">添加时间</v-btn>
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
  name: 'timeNew',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '时间新建',
    multiLine: true,
    color: '',
    y: 'top',
    snackbar: false,
    text: '',
    upDate: [
      {
        title: '',
        createtime: '',
        content: '',
        author: '',
      },
    ],
  }),
  methods: {
    async postTime () {
      const { data: res } = await this.$http.post('api/blog/timeNew', this.upDate)
      if (res.errno !== 0) {
        this.text = '新建时间错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.$router.push({ name: 'timeline' })
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
