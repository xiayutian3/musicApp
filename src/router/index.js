import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HostList from '@/pages/musiclist/hotlist'
import KingList from '@/pages/musiclist/kinglist'
import NewsList from '@/pages/musiclist/newslist'
import MoreList from '@/pages/morelist'
import MusicPlay from '@/pages/musicplay'
import ArtistsDetails from '@/pages/artistsDetails/artistsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home",
      name: 'Index',
      component: Index,
      children:[
        {
          path:"home",
          component:Home,
          redirect:"/home/hotlist",
          children:[
            {
              path:"hotlist",
              name:'HostList',
              component:HostList,
            },
            {
              path:"kinglist",
              name:'KingList',
              component:KingList,
            },
            {
              path:"newslist",
              name:'NewsList',
              component:NewsList,
            },
          ]
        },
        {
          path:"artists",
          component:Artists
        },
        {
          path:"listcate",
          component:Listcate
        },
        {
          path:"ucenter",
          component:Ucenter
        },
        {
          path:"search",
          component:Search
        },
        {
          path:"more",
          name:"MoreList",
          component:MoreList
        },
        {
          path: 'artistsDetails',
          name: 'ArtistsDetails',
          component: ArtistsDetails,
        }
      ]
    },
    {
      path: '/musicplay',
      name: 'MusicPlay',
      component: MusicPlay,
    }

  ]
})
