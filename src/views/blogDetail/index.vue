<template>
  <div>
    <div class="article">
      <div class="article-title">{{ cardsdata.title }}</div>
      <div class="article-meta">
        <span class="date">
                  <v-icon small class="con-yanjing">mdi-calendar-month-outline</v-icon>
                  <span class="information">发表于 {{ cardsdata.createtime }}</span>
        </span>
        <div class="meta-divider">|</div>
        <span class="author">
                  <v-icon small class="con-yanjing">mdi-face-outline</v-icon>
                  <span class="information">{{ cardsdata.author }}</span>
        </span>
        <div class="meta-divider">|</div>
        <span class="watch">
                  <v-icon small class="con-yanjing">mdi-eye-outline</v-icon>
                  <span class="information">阅读次数 {{ cardsdata.toalnum }}</span>
        </span>
        <div class="meta-divider">|</div>
        <span class="number">
                  <v-icon small class="con-yanjing">mdi-feather</v-icon>
                  <span class="information"> {{ wordNumber }} 字</span>
        </span>
      </div>
      <div class="meta-split"></div>
      <div class="mavonEditor">
        <mavon-editor :subfield="false"
                      :boxShadow="false"
                      :defaultOpen="'preview'"
                      :editable="false"
                      :toolbarsFlag="false"
                      :value="cardsdata.content"
                      previewBackground="white"
                      class="v-note-panel v-note-show v-show-content"
                      :codeStyle="atelier-lakeside-dark"
                      :ishljs="true"
        >
        </mavon-editor>
        <div class="footer-info">
          <div class="footer-left">
            <v-icon small>
              mdi-tag-multiple
            </v-icon>
            {{ tags }}
          </div>
          <div class="footer-right">
            <v-icon small color="red">
              mdi-cards-heart
            </v-icon>
            <span style="margin-right: 10px">猜你喜欢</span>
            <div @click="detail(href.id)" class="title-href">
              <span>{{ href.title }}</span>
            </div>
          </div>
        </div>
      </div>
      <Valine/>
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
import { getBlogDetail, getBlogArticle } from '@/api/blogDetail/blogDetail'
import Valine from '@/components/Valine'

export default {
  name: 'detail',
  components: {
    Valine,
  },
  data () {
    return {
      tags: '',
      href: {},
      wordNumber: 0,
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
      const { data: res } = await getBlogDetail({
        id: detailId,
      })
      this.wordNumber = res.content.length
      this.cardsdata = res
      this.tags = res.tags
      this.cardsdata.createtime = this.$moment(this.cardsdata.createtime).format('YYYY-MM-DD HH:mm:ss')
      this.getArticle()
    },
    async getArticle () {
      const { data: res } = await getBlogArticle()
      const link = res.listData.map(item => {
        return {
          title: item.title,
          id: item.id,
        }
      })
      this.href = link
      while (true) {
        const id = Math.floor(Math.random() * (link.length))
        if (link[id].title !== this.cardsdata.title || link.length === 1) {
          this.href = link[id]
          break
        }
      }
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

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .title-href span {
    display: none;
  }
  .title-href:after {
    content: '下一篇';
  }
}

.article-title {
  color: #34495e;
  font-size: 28px;
  margin: 10px 0;
  font-weight: 400;
  text-align: center;
}

.article-meta {
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: rgb(136, 136, 136);
}
.date {
  display: flex;
  align-items: center;
}
.meta-split {
  margin: 30px 0px;
  height: 3px;
  border: none;
  background-color: rgb(221, 221, 221);
  background-image: repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 4px, transparent 0px, transparent 8px);
}

.meta-divider {
  margin: 0 5px;
}

.author {
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

.v-note-wrapper {
  border: 1px solid #fff !important;
}

.footer-info {
  overflow: hidden;
  align-items: center;
  border-bottom: 1px dashed #cacaca;
  border-top: 1px dashed #cacaca;
  margin: 30px 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #757575;

  .footer-left {
    float: left;
  }

  .footer-right {
    line-height: 26px;
    margin-right: 10px;
    display: flex;
    flex-wrap: nowrap
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
