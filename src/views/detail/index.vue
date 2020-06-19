<template>
  <div>
    <div class="article">
      <div class="article-title">{{cardsdata.title}}</div>
      <div class="article-meta">
        <span class="date">
                  <v-icon small>mdi-calendar-month-outline</v-icon>
                  <span>{{cardsdata.createtime}}</span>
                </span>
        <span class="author">
                  <v-icon small>mdi-account-circle-outline</v-icon>
                  <span>{{cardsdata.author}}</span>
        </span>
      </div>
      <div class="content">{{cardsdata.content}}</div>
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
          createtime: '',
          author: '',
        },
      ],
    }
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const detailId = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/blog/detail?id=${detailId}`)
      console.log(res.data)
      if (res.errno !== 0) {
        alert('数据错误')
        return
      }
      this.cardsdata = res.data
      this.cardsdata.createtime = this.$moment(this.cardsdata.createtime).format('YYYY-MM-DD HH:mm:ss')
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
}

.author {
  @extend .date;
}

.content {
  margin-bottom: 40px;
}
</style>
