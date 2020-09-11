<template>
  <div class="article">
    <header-title :title="title" />
    <br>
    <v-card
      class="mx-auto"
    >
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        所有标签：
        <span class="title-article">{{listLen}}</span>
        <v-chip-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-chip
            v-for="(item) in tagList"
            :key="item.id"
            @click="getArticle(item.tags)">{{item.tags}}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
    <br>

  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
import { tagList } from '@/api/blogTag/blogTag'

export default {
  name: 'blogTag',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '标签页',
    tagList: [],
    listLen: 0,
    tags: '',
    page: {
      start: 0,
    },
    pagination: {
      pagenum: 1,
      length: 0,
    },
  }),
  mounted () {
    this.getTag()
  },
  methods: {
    async getTag () {
      const { data: res } = await tagList()
      this.tagList = res.listData
      this.listLen = res.listLen
    },
    getArticle (item) {
      this.$router.push({
        path: `/blogTags/${item}`,
      })
    },
  },
}
</script>

<style scoped lang="scss">

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

hr {
  display: none;
}

.title-article {
  color: teal;
}
</style>
