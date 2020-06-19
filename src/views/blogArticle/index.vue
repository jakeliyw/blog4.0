<template>
  <div class="article">
    <div class="nav-title">
      <h2 class="page-title">文章内容</h2>
      <v-divider></v-divider>
    </div>
    <div class="article-container container--fluid">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(item) of cardsdata" :key="item.id"
        >
          <v-hover
            v-slot:default="{ hover }"
            open-delay="200"
          >
            <v-card
              subtitle
              :elevation="hover ? 16 : 2"
              class="mx-auto"
              max-width="799.5"
            >
              <v-card-title class="headline mb-1 " @click="datail(item.id)">{{item.title}}</v-card-title>
              <div class="meta-box">
                <span class="date">
                  <v-icon small>mdi-calendar-month-outline</v-icon>
                  <span>{{item.createtime}}</span>
                </span>
                <span class="author">
                  <v-icon small>mdi-account-circle-outline</v-icon>
                  <span>{{item.author}}</span>
                </span>
              </div>
              <div class="content">
                {{item.subContent}}
                <v-btn depressed x-small color="success">阅读全文</v-btn>
              </div>
              <v-card-actions>
                <v-btn class="pr-0" text icon color="blue-grey lighten-2">
                  <v-icon small>mdi-tag-multiple
                  </v-icon>
                </v-btn>
                <div class="underline">css</div>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <!--      分页-->
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="3"
          class="pagination"
          color="teal"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      cardsdata: [
        {
          id: '',
          title: '',
          subContent: '',
          createtime: '',
          author: '',
        },
      ],
      list: {
        author: '',
        keyword: '',
      },
      page: 1,
    }
  },
  mounted () {
    this.pagelist()
  },
  methods: {
    async pagelist () {
      const { data: res } = await this.$http.get('/api/blog/list', this.list)
      if (res.errno !== 0) {
        alert('数据错误')
        return
      }
      this.cardsdata = res.data
      this.cardsdata.map(item => {
        item.createtime = this.$moment(item.createtime).format('YYYY-MM-DD HH:mm:ss')
      })
    },
    datail (id) {
      this.$router.push({
        path: `/detail/${id}`,
      })
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../style/Article";

.article {
  @include Article;
}

.underline {
  color: #607D8B;
  text-decoration: underline;
}

/*.link {*/
/*  text-decoration: none;*/
/*  color: #242935;*/
/*}*/

.headline {
  cursor: pointer;

  &:hover {
    color: #009688;
  }
}
</style>
