<template>
  <div class="art-list">
    <ul class="list">
      <router-link tag='li' class="song" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item,index) in listArr" :key='index'>
      <div class="left">
          {{ item.title }}
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import request from '@/request/api.js'
export default {
   props:{
    ting_uid:{
      type:String,
      default:"0"
    }
  },
  data(){
    return{
      listArr:[]
    }
  },
  mounted(){
    request.getArtistList({tinguid:this.ting_uid},res=>
      this.listArr = res.data.songlist
    )
  }
}
</script>
<style scoped>

.art-list{
  padding: 0 17px;
}

.song{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #999;
}
.left{
  font-size: 18;
}


</style>