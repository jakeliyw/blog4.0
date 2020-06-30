<template>
  <div>
    <header-title :title="title"/>
    <div class="container">
      <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown" >
        <v-timeline-item
          color="red lighten-2"
          small
          v-for="(item) of datalist" :key="item.id"
        >
          <span slot="opposite">{{item.createtime}}</span>
          <v-card class="elevation-2">
            <v-card-title class="headline">{{item.title}}</v-card-title>
            <div class="meta-box">
                        <span class="date">
                          <v-icon small>mdi-calendar-month-outline</v-icon>
                          <span>{{item.createtime}}</span>
                        </span>
            </div>
            <v-card-text>
              {{item.content}}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'blogTimeline',
  components: {
    HeaderTitle,
  },
  data: () => ({
    reverse: true,
    title: '时间线',
    datalist: [],
  }),
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: res } = await this.$http.get('/api/blog/timeAdmin')
      console.log(res)
      if (res.errno !== 0) {
        alert('获取时间线数据失败')
        return
      }
      res.data.map(item => {
        item.createtime = this.$moment(item.createtime).format('YYYY-MM-DD HH:mm:ss')
      })
      this.datalist = res.data
    },
  },
}
</script>
<style scoped lang="scss">
@import "../../style/Admin";
.admin{
  @include Admin;
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
}
</style>
