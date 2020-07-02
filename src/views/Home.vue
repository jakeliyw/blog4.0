<template>
  <div id="app">
    <v-app id="inspire">
      <!--        菜单栏区域-->
      <v-navigation-drawer
        v-model="drawer"
        app
        color="teal"
        enable-resize-watcher
      >
        <v-list-item class="px-4">
          <v-list-item-avatar @click="login" class="item-title">
            <v-img :src="require('../assets/image/head.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="item-title" @click="login">Hakey Lyw</v-list-item-title>
        </v-list-item>
        <!--          分割线-->
        <v-divider></v-divider>
        <v-list
          dark
          dense
          nav
          rounded
        >
          <v-list-item
            v-show="istrue"
            v-for="item in menuList"
            :key="item.id"
            link
            router
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="list-item">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
<!--          文章管理-->
          <v-list-group
            prepend-icon="local_offer"
            color="white"
            v-show="isshow"
          >
            <template v-slot:activator>
              <v-list-item-title>文章管理</v-list-item-title>
            </template>
              <v-list-item
                v-for="(admin) in adminsList"
                :key="admin.id"
                link
                router
                :to="admin.path"
              >
                <v-list-item-title v-text="admin.title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
<!--          时间管理-->
          <v-list-group
            prepend-icon="local_offer"
            color="white"
            v-show="isshow"
          >
            <template v-slot:activator>
              <v-list-item-title>时间管理</v-list-item-title>
            </template>
            <v-list-item
              v-for="(admin) in timeList"
              :key="admin.id"
              link
              router
              :to="admin.path"
            >
              <v-list-item-title
                v-text="admin.title"
              >

              </v-list-item-title>

            </v-list-item>
          </v-list-group>
<!--        标签管理-->
          <v-list-group
            prepend-icon="local_offer"
            color="white"
            v-show="isshow"
          >
            <template v-slot:activator>
              <v-list-item-title>标签管理</v-list-item-title>
            </template>
            <v-list-item
              v-for="(admin) in tagList"
              :key="admin.id"
              link
              router
              :to="admin.path"
            >
              <v-list-item-title
                v-text="admin.title"
              >

              </v-list-item-title>

            </v-list-item>
          </v-list-group>
        </v-list>

        <template v-slot:append>
          <div class="nav-bottom">
            <p>2020 | Hakey博客</p>
            <p> {{nowDate}}{{nowWeek}}{{nowTime}}</p>
            <a href="http://www.beian.gov.cn/portal/index.do">
              <img :src="require('../assets/image/police.png')" alt="备案" />
              粤ICP备20001315号
            </a>
          </div>
        </template>
      </v-navigation-drawer>

      <!--        头部区域-->
      <v-app-bar
        app
        color="teal"
        dark
        style="height: 56px"
        class="md-none"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <!--        内容区域-->
      <v-content class="remove-top">
        <div class="container">
          <div class="back-top">
            <img :src="require('../assets/image/top.png')" alt="顶部" v-if="btnFlag" class="go-top" @click="backTop">
          </div>
          <router-view></router-view>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      scrollTop: 0, // 初始化高度
      btnFlag: false, // 控制图片的隐藏
      istrue: true,
      drawer: true,
      menuList: [],
      adminsList: [],
      isshow: false,
      timeList: [],
      tagList: [],
      nowDate: '', // 当前日期
      nowTime: '', // 当前时间
      nowWeek: '', // 当前星期
    }
  },
  mounted () {
    this.getMenu()
    this.getAdmin()
    this.getTime()
    this.getTag()
    window.addEventListener('scroll', this.scrollToTop, true) // 生命周期滚动
    // 页面加载完后显示当前时间
    this.dealWithTime(new Date())
    // 定时刷新时间
    this.timer = setInterval(() => {
      this.dealWithTime(new Date()) // 修改数据date
    }, 500)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop) // 生命周期滚动
    if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
      clearInterval(this.timer)
    }
  },
  methods: {
    async getMenu () {
      const { data: res } = await this.$http.get('/api/menu')
      this.menuList = res.data
    },
    async getAdmin () {
      const { data: res } = await this.$http.get('/api/getAdmins')
      if (res.errno === 0) {
        this.adminsList = res.data
        this.isshow = true
      } else {
        this.isshow = false
      }
    },
    async getTime () {
      const { data: res } = await this.$http.get('/api/getTime')
      if (res.errno === 0) {
        this.timeList = res.data
        this.isshow = true
      } else {
        this.isshow = false
      }
    },
    async getTag () {
      const { data: res } = await this.$http.get('/api/getTag')
      if (res.errno === 0) {
        this.tagList = res.data
        this.isshow = true
      } else {
        this.isshow = false
      }
    },
    login () {
      this.$router.push({ name: 'bloglogin' })
    },
    // 时间轮子
    dealWithTime (data) { // 获取当前时间
      // let formatDateTime
      const Y = data.getFullYear()
      const M = data.getMonth() + 1
      const D = data.getDate()
      let H = data.getHours()
      let Min = data.getMinutes()
      let S = data.getSeconds()
      let W = data.getDay()
      H = H < 10 ? '0' + H : H
      Min = Min < 10 ? '0' + Min : Min
      S = S < 10 ? '0' + S : S
      switch (W) {
        case 0:
          W = '日'
          break
        case 1:
          W = '一'
          break
        case 2:
          W = '二'
          break
        case 3:
          W = '三'
          break
        case 4:
          W = '四'
          break
        case 5:
          W = '五'
          break
        case 6:
          W = '六'
          break
        default:
          break
      }
      this.nowDate = Y + '年' + M + '月' + D + '日 '
      this.nowWeek = '周' + W
      this.nowTime = H + ':' + Min + ':' + S
      // formatDateTime = Y + '年' + M + '月' + D + '日' + '周' +W + H + ':' + Min + ':' + S
    },
    backTop () {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
  },
}
</script>

<style scoped lang="scss">
/*大于979头部消失*/
@media screen and (min-width: 979px) {
  .md-none {
    display: none;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 900px;
  }
}

@media screen and (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}

@media (min-width: 1904px) {
  .container {
    max-width: 1785px;
  }
}

/*大于979内容冲上去*/
@media screen and (min-width: 979px) {
  .remove-top {
    padding: 0px 0px 0px 256px !important;
  }
}

.container {
  width: 100%;
  padding: 12px;
  margin-left: auto;
  margin-right: auto;
}

.list-item {
  color: white;
  font-size: 14px !important;
}

.item-title {
  color: white;
  font-size: 16px;
  cursor: pointer
}

.v-list-item {
  min-height: 56px;
}

.md-none {
  height: 56px;
}

.theme--light.v-icon {
  color: white;
}

.v-icon {
  color: white !important;
}

.nav-bottom {
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    margin: 0 0 5px 0;
    color: white;
    font-size: 14px;
  }

  a {
    margin: 0 0 10px 0;
    color: white;
    text-decoration: none;
    font-size: 14px;

    img {
      width: 15px;
    }
  }
}

.back-top {
  position: fixed;
  right: 1%;
  bottom: 45px;
  z-index: 999;

  img {
    width: 50px;
    height: 50px;
  }
}
.v-list-group ::v-deep .v-list-group__items{
  margin-left: 55px;
}
</style>
