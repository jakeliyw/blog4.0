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
import edit from '../views/edit'
import newBlog from '../views/newBlog'
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
        path: '/detail',
        name: 'detail',
        component: detail,
      },
      {
        path: '/newBlog',
        name: 'new',
        component: newBlog,
      },
      {
        path: '/edit',
        name: 'edit',
        component: edit,
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
