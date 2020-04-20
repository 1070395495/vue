import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from "../components/List"
import fenlei from "../components/fenlei"
import search from "../components/search"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/fenlei',
          name: 'fenlei',
          component: fenlei,
        },
        {
          path: '/List',
          name: 'List',
          component: List,
        }
      ]
    },
    {
      path:'/search',
      name:"search",
      component:search
    }
  ]
})
