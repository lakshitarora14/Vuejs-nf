import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/HomePage'
import ProfilePage from '../views/ProfilePage'
import MyProfilePage from '../views/MyProfilePage'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: Homepage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
      path: '/MyProfile',
      name: 'MyProfile',
      component: MyProfilePage
    },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
