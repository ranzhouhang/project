import Vue from 'vue'
import VueRouter from 'vue-router'
// import Search from './../components/search/search'
import MyMusic from './../components/mymusic/mymusic'
import FindMusic from './../components/findmusic/findmusic'
import Community from './../components/community/community'
import Findrecommend from './../components/findrecommend/findrecommend'
import Findsheet from './../components/findsheet/findsheet'
import Rank from './../components/rank/rank'
import Broadcast from './../components/broadcast/broadcast'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/mymusic'
    },
    {
      // 顶部三个的第一页   相当于首页
      path: '/mymusic',
      component: MyMusic
    },
    {
      // +++++++++++++++++++++ findmusic 顶部三个的第二页
      path: '/findmusic',
      component: FindMusic,
      //  菜单的router
      children: [{
        path: '',
        redirect: '/findmusic/findrecommend'
      },
      {
        // 个性推荐
        path: '/findmusic/findrecommend',
        component: Findrecommend
      },
      {
        // 歌单
        path: '/findmusic/findsheet',
        component: Findsheet
      },
      {
        // 主播电台
        path: '/findmusic/broadcast',
        component: Broadcast
      },
      {
        // 排行榜
        path: '/findmusic/rank',
        component: Rank
      }]
    },
    {
      // +++++++++++++++++++++ 顶部三个的第三页
      path: '/community',
      component: Community
    }

    // {
    //   // 搜索页
    //   path: '/search',
    //   name: 'Search',
    //   component: Search
    // }
  ]
})
