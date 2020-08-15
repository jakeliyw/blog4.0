import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login'

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
        component: () => import('@/views/blogArticle'),
        meta: {
          title: ' 首页 - Hakey的博客',
        },
      },
      {
        path: '/blogTag',
        name: 'tag',
        component: () => import('@/views/blogTag'),
        meta: {
          title: ' 标签 - Hakey的博客',
        },
      },
      {
        path: '/blogTags/:item',
        name: 'tags',
        component: () => import('@/views/blogTags'),
        meta: {
          title: ' 标签文章 - Hakey的博客',
        },
      },
      {
        path: '/blogAbout',
        name: 'about',
        component: () => import('@/views/blogAbout'),
        meta: {
          title: ' 关于我 - Hakey的博客',
        },
      },
      {
        path: '/blogTimeline',
        name: 'timeline',
        component: () => import('@/views/blogTimeline'),
        meta: {
          title: ' 时间线 - Hakey的博客',
        },
      },
      {
        path: '/blogAdmin',
        name: 'admin',
        component: () => import('@/views/blogAdmin/blogAdmin'),
        meta: {
          title: ' 文章管理 - Hakey的博客',
        },
      },
      {
        path: '/blogDetail/:id',
        name: 'detail',
        component: () => import('@/views/blogDetail'),
        meta: {
          title: ' 文章详情 - Hakey的博客',
        },
      },
      {
        path: '/blogNew',
        name: 'new',
        component: () => import('@/views/blogAdmin/blogNew'),
        meta: {
          title: ' 文章新建 - Hakey的博客',
        },
      },
      {
        path: '/blogUpdate',
        name: 'update',
        component: () => import('@/views/blogAdmin/blogUpdate'),
        meta: {
          title: ' 文章更新 - Hakey的博客',
        },
      },
      {
        path: '/timeAdmin',
        name: 'timeadmin',
        component: () => import('@/views/timeAdmin/timeAdmin'),
        meta: {
          title: ' 时间管理 - Hakey的博客',
        },
      },
      {
        path: '/timeNew',
        name: 'timenew',
        component: () => import('@/views/timeAdmin/timeNew'),
        meta: {
          title: ' 时间新建 - Hakey的博客',
        },
      },
      {
        path: '/timeUpdate',
        name: 'timeupdate',
        component: () => import('@/views/timeAdmin/timeUpdate'),
        meta: {
          title: ' 时间更新 - Hakey的博客',
        },
      },
      {
        path: '/tagAdmin',
        name: 'tagadmin',
        component: () => import('@/views/tagAdmin/tagAdmin'),
        meta: {
          title: ' 标签管理 - Hakey的博客',
        },
      },
      {
        path: '/tagNew',
        name: 'tagnew',
        component: () => import('@/views/tagAdmin/tagNew'),
        meta: {
          title: ' 标签新建 - Hakey的博客',
        },
      },
      {
        path: '/tagUpdate',
        name: 'tagupdate',
        component: () => import('@/views/tagAdmin/tagUpdate'),
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
        component: () => import('@/views/blogLogin'),
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

// 避免冗余的点击导航
<<<<<<< HEAD
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
=======
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
>>>>>>> 7704ba8086ce0ec63bbc31acf435cba81dddea10

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
