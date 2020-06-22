import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blogLogin from '../views/blogLogin'
import admin from '../views/admin'
import blogAbout from '../views/blogAbout'
import blogArticle from '../views/blogArticle'
import blogTag from '../views/blogTag'
import blogTimeline from '../views/blogTimeline'
import detail from '../views/detail'
import newBlog from '../views/newBlog'
import update from '../views/update'
import login from '../views/login'

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
        path: '/admin',
        name: 'admin',
        component: admin,
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: detail,
      },
      {
        path: '/newBlog',
        name: 'new',
        component: newBlog,
      },
      {
        path: '/update',
        name: 'update',
        component: update,
      },
    ],
  },
  {
    path: '/blogLogin',
    name: 'blogLogin',
    redirect: '/login',
    component: blogLogin,
    children: [
      {
        path: '/login',
        name: 'login',
        component: login,
      },
    ],
  },

]

const router = new VueRouter({
  routes,
})

export default router
