<template>
  <div>
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
              color="teal"
              dark
              class="mb-2"
              @click="newBlog"
            >新建博客
            </v-btn>
          </v-toolbar>
        </template>
        <!--        修改按钮-->
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
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
      <!--        分页器-->
      <v-pagination
        v-model="pagination.pagenum"
        color="teal"
        class="pagination"
        :length="6"
      ></v-pagination>
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
    pagination: {
      pagenum: 1,
      length: 0,
    },
    page: {
      start: 0,
      end: 5,
    },
  }),

  computed: {
    total () {
      return Math.floor(this.desserts.length / 5)
    },
  },
  mounted () {
    this.initialize()
  },

  methods: {
    async initialize () {
      // const { data: res } = await this.$http.get(`/api/blog/list?isadmin=1&keyword=${this.keyword}`)
      // if (res.errno !== 0) {
      //   this.text = '未登录操作错误'
      //   this.color = 'error'
      //   this.snackbar = true
      //   return
      // }
      // this.desserts = res.data
      // console.log(this.desserts)
      const { data: res } = await this.$http.get('/api/blog/list', {
        params: {
          start: this.page.start,
          end: this.page.end,
        },
      })
      if (res.errno !== 0) {
        alert('数据获取错误')
        return
      }
      console.log(res)
    },

    editItem (item) {
      this.$store.commit('detail/upDetail', item)
      this.$router.push({ name: 'update' })
    },
    newBlog () {
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
      this.color = 'success'
      this.snackbar = true
      this.initialize()
    },
  },
}
</script>
<style scoped lang="scss">
.nav-title {
  padding: 0 10px;

  .page-title {
    margin-top: 10px;
    font-weight: normal;
    font-size: 18px;
    color: #32325d;
    margin-bottom: 10px;
  }
}

.v-data-table ::v-deep .v-data-footer {
  display: none;
}

.pagination {
  margin-top: 20px;
}

.container {
  border: 1px solid #eee;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  margin: 20px auto;
  overflow: hidden;
}
</style>
