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
          </v-list>
          <template v-slot:append>
            <div class="nav-bottom">
              <p>2020 | Hakey博客</p>
              <p>{{date}}</p>
              <a href="http://www.beian.gov.cn/portal/index.do">
                <img :src="require('../assets/image/police.png')" alt="备案"/>
                粤ICP备20001315号</a>
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
              <img :src="require('../assets/image/top.png')" alt="顶部">
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
      date: new Date(), // 博客时间
      istrue: true,
      drawer: true,
      menuList: [],
      nick_name: '',
    }
  },
  mounted () {
    this.menu()
    const _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss') // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    async menu () {
      const { data: res } = await this.$http.get('/api/menu')
      this.menuList = res.data
    },
    login () {
      this.$router.push({ name: 'login' })
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
.nav-bottom{
  display: flex;
  flex-direction: column;
  text-align: center;
  p{
    margin: 0 0 5px 0;
    color: white;
    font-size: 14px;
  }
  a{
    margin: 0 0 10px 0;
    color: white;
    text-decoration: none;
    font-size: 14px;
    img{
      width: 15px;
    }
  }
}
.back-top{
  position: fixed;
  right: 1%;
  bottom: 45px;
  z-index: 999;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
