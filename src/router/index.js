import Vue from 'vue'
import VueRouter from 'vue-router'

// const Redirect = () => import('@/views/redirect/')

const Home = () => import('@/views/')

// const LEATable = () => import('@/views/mainPage/TablePage/')
// const dashboard = () => import('@/views/mainPage/home/index')
// const noData = () => import('@/views/mainPage/home/noData')
// const EducationBureau = () => import('@/views/mainPage/EducationBureauCharts')
// const shchoolCharts = () => import('@/views/mainPage/shchoolCharts/')
// const facultyCharts = () => import('@/views/mainPage/facultyCharts/')
// const classCharts = () => import('@/views/mainPage/classCharts/')
// const studentCharts = () => import('@/views/mainPage/studentCharts/')

Vue.use(VueRouter)

export const constantRoutes = [
  // {
  //   path: '/redirect/:path*',
  //   component: Redirect
  // },
  {
    path: '',
    name: 'home',
    component: Home
  }
]

const createRouter = () => new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
