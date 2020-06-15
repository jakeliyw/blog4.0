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
              <v-card-title class="headline mb-1">{{data.title}}</v-card-title>
              <div class="meta-box">
                <span class="date">
                  <v-icon small>mdi-calendar-month-outline</v-icon>
                  <span>{{data.createtime}}</span>
                </span>
                <span class="author">
                  <v-icon small>mdi-account-circle-outline</v-icon>
                  <span>{{data.author}}</span>
                </span>
              </div>
              <div class="content">
                {{data.subContent}}
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      data: {
        id: '',
        title: '',
        subContent: '',
        createtime: '',
        author: '',
      },
      list: {
        author: '',
        keyword: '',
      },
    }
  },
  mounted () {
    this.pagelist()
  },
  methods: {
    async pagelist () {
      const { data: res } = await this.$http.get('blog/list', this.list)
      console.log(res)
      res.data.map(item => {
        if (res.code !== 200) {
          alert('数据错误')
          return
        }
        this.data = item
        this.data.createtime = this.$moment(this.data.createtime).format('YYYY-MM-DD HH:mm:ss')
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

.meta-box {
  font-size: 12px;
  color: #757575;
  padding: 0 16px;
  display: flex;
  margin-bottom: 10px;
  align-content: center;

  .date {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }

  .author {
    @extend .date;
  }
}

.content {
  padding: 0 16px;
  font-size: 15px;
  line-height: 24px;
}
</style>
