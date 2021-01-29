import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../views/AppPosts.vue'
import SinglePost from '../views/SinglePost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppPosts',
    component: AppPosts
  },
  {
    path: '/posts',
    name: 'AppPosts',
    component: AppPosts
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
