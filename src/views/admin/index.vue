<template>
  <div class="admin">
    <div class="nav-title">
      <h2 class="page-title">后台数据</h2>
      <v-divider></v-divider>
    </div>
    <div class="container">
      <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <!--            搜索-->
            <v-text-field
              v-model="keyword"
              append-icon="search"
              label="Search"
              single-line
              hide-details
              @keyup.enter.native="initialize"
            ></v-text-field>

            <v-spacer></v-spacer>
            <!--            新建博客-->
            <v-btn
              color="primary"
              dark
              class="mb-2"
            >新建博客
            </v-btn>
          </v-toolbar>
        </template>
        <!--        修改按钮-->
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem"
            color="primary"
          >
            mdi-pencil
          </v-icon>
          <!--          删除按钮-->
          <v-icon
            small
            color="red"
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>

      </v-data-table>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    multiLine: true,
    color: '',
    y: 'top',
    snackbar: false,
    text: '',
    headers: [
      {
        text: '博客标题',
        align: 'start',
        sortable: true,
        value: 'title',
      },
      {
        text: '操作',
        value: 'actions',
        sortable: false,
      },
    ],
    desserts: [],
    keyword: '',
  }),

  created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      const { data: res } = await this.$http.get(`/api/blog/list?isadmin=1&keyword=${this.keyword}`)
      if (res.errno !== 0) {
        this.text = '未登录操作错误'
        this.color = 'error'
        this.snackbar = true
        return
      }
      console.log(res)
      this.desserts = res.data
    },

    editItem () {
      this.$router.push({ name: 'new' })
    },

    async deleteItem (item) {
      const { data: res } = await this.$http.post(`/api/blog/del?id=${item.id}`)
      if (res.errno !== 0) {
        this.text = '删除博客失败'
        this.color = 'error'
        this.snackbar = true
        return
      }
      this.text = '删除博客成功'
      this.color = 'teal'
      this.snackbar = true
      this.initialize()
    },
  },
}
</script>
<style scoped lang="scss">
@import "../../style/Admin";
.admin{
  @include Admin;
}
</style>
