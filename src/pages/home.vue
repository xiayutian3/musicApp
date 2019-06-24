<template>
  <div class="homeBS" ref="homeBS">
    <div >
      <today-recommend title="今日推荐" :type="1" :size="6" :offset="0"/>
      <news-music :type="2" :size="3" :offset="0"/>
      <swiper-banner/>
      <music-list-nav/>
      <today-recommend title="热门歌单" :type="24" :size="6" :offset="0"/>
    </div>
  </div>
</template>
<script>
import MusicListNav from "@/pages/musiclist/musiclistnav"
import BScroll from "better-scroll";
export default {
  name:'home',
  data(){
    return{

    }
  },
  components:{
    MusicListNav
  },
  mounted(){
    this.$nextTick(()=>{
      this._initBS();
    })
    
  },
  methods:{
    _initBS() {
      new BScroll(this.$refs.homeBS, {
        probeType: 2,
        click: true,
      });
    }
  }
}
</script>
<style scoped>
.homeBS{
  height: 100%;
}
</style>


