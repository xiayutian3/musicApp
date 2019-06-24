<template>
  <div class="music-nav">
    <div class="log url hd">
        <h2>音乐榜单</h2>
        <div class="more"  @click="$router.push({name:'MoreList',params:{type:moreType,size:12,title:title,offset:offset}})">更多</div>
    </div>
    <ul>

      <!-- <li>
        <router-link to="/home/hotlist/2">热歌榜</router-link>
        <span class="gap-line"> </span>
      </li>
      <li>
        <router-link to="/home/newslist/1">新歌榜</router-link>
        <span class="gap-line"> </span>
      </li>
      <li>
        <router-link to="/home/kinglist/11">King榜</router-link>
        <span class="gap-line"> </span>
      </li> -->

      <!-- 另一种写法 -->
      <!-- <li>
        <router-link :to="({ name: 'HostList', params: { type: 2 }})">热歌榜</router-link>
        <span class="gap-line"> </span>
      </li>
      <li>
        <router-link :to="({ name: 'NewsList', params: { type: 1 }})">新歌榜</router-link>
        <span class="gap-line"> </span>
      </li>
      <li>
        <router-link :to="({ name: 'KingList', params: { type: 11 }})">King榜</router-link>
        <span class="gap-line"> </span>
      </li> -->

      <!-- 再再另一种写法 -->
      <li>
        <div :class="moreType==2?'on':''"  @click="routerPush('HostList',2,'热歌榜')">热歌榜</div>
        <span class="gap-line"> </span>
      </li>
      <li>
        <div :class="moreType==1?'on':''"  @click="routerPush('NewsList',1,'新歌榜')">新歌榜</div>
        <span class="gap-line"> </span>
      </li>
      <li>
        <div :class="moreType==11?'on':''"  @click="routerPush('KingList',11,'King榜')">King榜</div>
        <span class="gap-line"> </span>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  
  </div>
</template>
<script>
export default {
  props:{
    offset:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      moreType:2,
      title:'热歌榜'
    }
  },
  methods:{
    routerPush(componentName,type,title){
      this.moreType = type
      this.title = title
      this.$router.push({name:componentName,params:{type:type}})
    }
  }
}
</script>
<style scoped>
.more{
  font-size: 12px;
  text-align: right;
}
.on{
  color: red;
}
.music-nav{
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 17px;
}

.hd {
    margin: 14px 0 18px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.hd {
    margin-bottom: 0;
}

ul{
    display: flex;
}

ul li{
  padding: 18px 0 12px 0;
  font-size: 16px;
  flex: 1;
  text-align: center;
  color: #999;
  position: relative;
  z-index: 2;
}

ul li a{
  display: block;
}

ul li a.active{
  color: #299DE7 !important;
}
.gap-line {
    position: absolute;
    right: 0;
    top: 20px;
    height: 18px;
    width: 1px;
    border-left: 1px solid #eee;
}

</style>


