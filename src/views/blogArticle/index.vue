<template>
  <div class="article">
    <div>
    <header-title :title="title"/>
    <div class="article-container container--fluid">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(item) of cardsdatalimit" :key="item.id"
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
                          <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                          <span>{{item.createtime}}</span>
                        </span>
                <span class="author">
                          <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                          <span>{{item.author}}</span>
                        </span>
                <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span>{{item.toalnum}}</span>
        </span>
              </div>
              <div class="content">
                {{item.subContent}}
                <v-btn depressed x-small color="success" @click="datail(item.id)">阅读全文</v-btn>
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
          v-model="pagination.pagenum"
          :length="total"
          class="pagination"
          color="teal"
        ></v-pagination>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'blogArticle',
  components: {
    HeaderTitle,
  },
  data () {
    return {
      title: '首页',
      cardsData: {},
      page: {
        start: 0,
        end: 5,
      },
      pagination: {
        pagenum: 1,
        length: 0,
      },
    }
  },
  watch: {
    // 监听这个当前页面
    'pagination.pagenum' () {
      this.page.start = (this.pagination.pagenum - 1) * 5
      this.pagelist()
    },
  },
  computed: {
    total () {
      return Math.ceil(this.pagination.length / 5)
    },
    // 当前页start,取值
    cardsdatalimit () {
      return this.cardsData[this.page.start]
    },
  },
  mounted () {
    this.pagelist()
  },
  methods: {
    async pagelist () {
      const { data: res } = await this.$http.get('/api/blog/list', {
        params: {
          start: this.page.start,
          end: this.page.end,
        },
      })
      if (res.errno !== 0) {
        alert('数据错误')
        return
      }
      // 把数组的长度设置为后台计算的总长度
      this.$set(
        this.pagination,
        'length',
        res.data.listLen,
      )
      // 将空对象修改成请求过来的数据
      this.$set(
        this.cardsData,
        this.page.start,
        res.data.listData,
      )
      res.data.listData.map(item => {
        item.createtime = this.$moment(item.createtime).format('YYYY-MM-DD HH:mm:ss')
      })
    },
    datail (id) {
      this.$router.push({
        path: `/blogDetail/${id}`,
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

.headline {
  cursor: pointer;

  &:hover {
    color: #009688;
  }
}
</style>
