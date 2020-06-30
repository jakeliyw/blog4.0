import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blogLogin from '../views/blogLogin'
import Login from '../views/Login'
import blogAdmin from '../views/blogAdmin/blogAdmin'
import blogAbout from '../views/blogAbout'
import blogArticle from '../views/blogArticle'
import blogTag from '../views/blogTag'
import blogTimeline from '../views/blogTimeline'
import blogDetail from '../views/blogDetail'
import blogNew from '../views/blogAdmin/blogNew'
import blogUpdate from '../views/blogAdmin/blogUpdate'
import timeAdmin from '../views/timeAdmin/timeAdmin'
import timeNew from '../views/timeAdmin/timeNew'
import timeUpdate from '../views/timeAdmin/timeUpdate'

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
      },
      {
        path: '/blogTag',
        name: 'tag',
        component: blogTag,
      },
      {
        path: '/blogAbout',
        name: 'about',
        component: blogAbout,
      },
      {
        path: '/blogTimeline',
        name: 'timeline',
        component: blogTimeline,
      },
      {
        path: '/blogAdmin',
        name: 'admin',
        component: blogAdmin,
      },
      {
        path: '/blogDetail/:id',
        name: 'detail',
        component: blogDetail,
      },
      {
        path: '/blogNew',
        name: 'new',
        component: blogNew,
      },
      {
        path: '/blogUpdate',
        name: 'update',
        component: blogUpdate,
      },
      {
        path: '/timeAdmin',
        name: 'timeadmin',
        component: timeAdmin,
      },
      {
        path: '/timeNew',
        name: 'timenew',
        component: timeNew,
      },
      {
        path: '/timeUpdate',
        name: 'timeupdate',
        component: timeUpdate,
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
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  const tokenStr = window.localStorage.getItem('token')
  if (!tokenStr) {
    if (['/blogAdmin', '/blogNew', '/blogUpdate', '/timeAdmin', '/timeNew', '/blogLogin'].includes(to.path)) {
      return next('/blogArticle')
    }
  }
  next()
})

export default router
