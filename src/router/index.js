import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blogLogin from '../views/blogLogin'
import Login from '../views/Login'
import blogAdmin from '../views/blogAdmin/blogAdmin'
import blogAbout from '../views/blogAbout'
import blogArticle from '../views/blogArticle'
import blogTag from '../views/blogTag'
import blogTags from '../views/blogTags'
import blogTimeline from '../views/blogTimeline'
import blogDetail from '../views/blogDetail'
import blogNew from '../views/blogAdmin/blogNew'
import blogUpdate from '../views/blogAdmin/blogUpdate'
import timeAdmin from '../views/timeAdmin/timeAdmin'
import timeNew from '../views/timeAdmin/timeNew'
import timeUpdate from '../views/timeAdmin/timeUpdate'
import tagAdmin from '../views/tagAdmin/tagAdmin'
import tagNew from '../views/tagAdmin/tagNew'
import tagUpdate from '../views/tagAdmin/tagUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/blogArticle',
    component: Home,
    children: [
      {
        path: '/blogArticle',
        name: 'article',
        component: blogArticle,
        meta: {
          title: ' 首页 - Hakey的博客',
        },
      },
      {
        path: '/blogTag',
        name: 'tag',
        component: blogTag,
        meta: {
          title: ' 标签 - Hakey的博客',
        },
      },
      {
        path: '/blogTags/:item',
        name: 'tags',
        component: blogTags,
        meta: {
          title: ' 标签文章 - Hakey的博客',
        },
      },
      {
        path: '/blogAbout',
        name: 'about',
        component: blogAbout,
        meta: {
          title: ' 关于我 - Hakey的博客',
        },
      },
      {
        path: '/blogTimeline',
        name: 'timeline',
        component: blogTimeline,
        meta: {
          title: ' 时间线 - Hakey的博客',
        },
      },
      {
        path: '/blogAdmin',
        name: 'admin',
        component: blogAdmin,
        meta: {
          title: ' 文章管理 - Hakey的博客',
        },
      },
      {
        path: '/blogDetail/:id',
        name: 'detail',
        component: blogDetail,
        meta: {
          title: ' 文章详情 - Hakey的博客',
        },
      },
      {
        path: '/blogNew',
        name: 'new',
        component: blogNew,
        meta: {
          title: ' 文章新建 - Hakey的博客',
        },
      },
      {
        path: '/blogUpdate',
        name: 'update',
        component: blogUpdate,
        meta: {
          title: ' 文章更新 - Hakey的博客',
        },
      },
      {
        path: '/timeAdmin',
        name: 'timeadmin',
        component: timeAdmin,
        meta: {
          title: ' 时间管理 - Hakey的博客',
        },
      },
      {
        path: '/timeNew',
        name: 'timenew',
        component: timeNew,
        meta: {
          title: ' 时间新建 - Hakey的博客',
        },
      },
      {
        path: '/timeUpdate',
        name: 'timeupdate',
        component: timeUpdate,
        meta: {
          title: ' 时间更新 - Hakey的博客',
        },
      },
      {
        path: '/tagAdmin',
        name: 'tagadmin',
        component: tagAdmin,
        meta: {
          title: ' 标签管理 - Hakey的博客',
        },
      },
      {
        path: '/tagNew',
        name: 'tagnew',
        component: tagNew,
        meta: {
          title: ' 标签新建 - Hakey的博客',
        },
      },
      {
        path: '/tagUpdate',
        name: 'tagupdate',
        component: tagUpdate,
        meta: {
          title: ' 标签更新 - Hakey的博客',
        },
      },
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    redirect: '/blogLogin',
    component: Login,
    children: [
      {
        path: '/blogLogin',
        name: 'bloglogin',
        component: blogLogin,
        meta: {
          title: ' 登陆 - Hakey的博客',
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})
router.beforeEach((to, from, next) => {
  const tokenStr = window.localStorage.getItem('token')
  if (!tokenStr) {
    if (['/blogAdmin', '/blogNew', '/blogUpdate',
      '/timeAdmin', '/timeNew', '/timeUpdate', '/tagUpdate', '/tagNew', '/tagAdmin'].includes(to.path)) {
      return next('/blogArticle')
    }
  }
  next()
})

export default router
