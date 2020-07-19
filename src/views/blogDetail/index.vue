<template>
  <div>
    <div class="article">
      <div class="article-title">{{cardsdata.title}}</div>
      <div class="article-meta">
        <span class="date">
                  <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                  <span>{{cardsdata.createtime}}</span>
                </span>
        <span class="author">
                  <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                  <span>{{cardsdata.author}}</span>
        </span>
        <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span>{{cardsdata.toalnum}}</span>
        </span>
      </div>
      <div class="mavonEditor">
        <mavon-editor :subfield="false"
                      :boxShadow="false"
                      :defaultOpen="'preview'"
                      :editable="false"
                      :toolbarsFlag="false"
                      :value="cardsdata.content"
                      previewBackground="white"
                      class="v-note-panel v-note-show v-show-content"
                      :codeStyle="codeStyle"
                      :ishljs="true"
        >
        </mavon-editor>
        <div class="footer-info">
          <div class="footer-left">
            <v-icon small>
              mdi-tag-multiple
            </v-icon>
            {{tags}}
          </div>
          <div class="footer-right">
            <v-icon small color="red">
              mdi-cards-heart
            </v-icon>
            <span style="margin-right: 10px">猜你喜欢</span>
            <span class="title-href" @click="detail(href.id)">{{href.title}}</span>
          </div>
        </div>
      </div>
      <!--      <div class="markdown-body" v-html="cardsdata.content">{{cardsdata.content}}</div>-->
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'detail',
  data () {
    return {
      codeStyle: 'monokai-sublime', // 代码块主题
      tags: '',
      href: {},
      cardsdata: [
        {
          id: '',
          title: '',
          createtime: '',
          author: '',
        },
      ],
    }
  },
  mounted () {
    this.getDetail()
    this.getArticle()
  },

  methods: {
    async getDetail () {
      const detailId = this.$route.params.id
      const { data: res } = await this.$http.get('/api/blog/detail', {
        params: {
          id: detailId,
        },
      })
      if (res.errno !== 0) {
        alert('数据错误')
        return
      }
      this.cardsdata = res.data
      this.tags = res.data.tags
      this.cardsdata.createtime = this.$moment(this.cardsdata.createtime).format('YYYY-MM-DD HH:mm:ss')
      this.getArticle()
    },
    async getArticle () {
      const { data: res } = await this.$http.get('/api/blog/list')
      const link = res.data.listData.map(item => {
        return {
          title: item.title,
          id: item.id,
        }
      })
<<<<<<< HEAD
      this.href = link
      // while (true) {
      //   const id = Math.floor(Math.random() * (link.length))
      //   if (link[id].title !== this.cardsdata.title) {
      //     this.href = link[id]
      //     break
      //   }
      // }
=======
      while (true) {
        const id = Math.floor(Math.random() * (link.length))
        if (link[id].title !== this.cardsdata.title || link.length === 1) {
          this.href = link[id]
          break
        }
      }
>>>>>>> 951a8f284abf28edac4fb1f92891d03007259b74
    },
    detail (id) {
      this.$router.push({
        path: `/blogDetail/${id}`,
      })
      this.getDetail()
    },
  },
}
</script>

<style scoped lang="scss">
.article-title {
  color: #34495e;
  font-size: 28px;
  margin-top: 10px;
  font-weight: 500;
}

.article-meta {
  padding: 1em 0;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 1.5em 0;
  font-size: 11px;
  color: #757575;
}

.date {
  margin-right: 20px;

  .con-yanjing {
    margin-right: 4px;
  }
}

.author {
  @extend .date;

  .con-yanjing {
    margin-right: 4px;
  }
}

.watch {
  @extend .author;

  .con-yanjing {
    font-size: 12px;
    margin-right: 4px;
  }
}

.v-note-panel {
  border: none;
}

.v-note-show ::v-deep .v-show-content {
  padding: 0 0 !important;
}

.footer-info {
  overflow: hidden;
  padding: 1em 0;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 1.5em 0;
  font-size: 11px;
  color: #757575;

  .footer-left {
    float: left;
  }

  .footer-right {
    float: right;
    line-height: 26px;
    margin-right: 10px;
  }
}

.title-href {
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: teal;
  }
}
.v-note-wrapper {
  position: static;
}
</style>
