<template>
  <div class="mod-albums">
    <div class="hd log url">
        <h2>{{title}}</h2>
        <div @click="$router.push({name:'MoreList',params:{type:type,size:12,title:title,offset:offset}})">
          更多
        </div>
    </div>
    <div class="container">
        <div class="gallery">
            <div class="scroller">
                <div class="card url" @click="$router.push({name:'MusicPlay',params:{songid:item.song_id}})" v-for="(item,index) in song_list" :key="index">
                    <div class="album">
                        <img :src="item.pic_big" :alt="item.title">
                        <div class="name">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import request from '@/request/api.js'
export default {
  name:'today-recommend',
  props:{
    title:{
      type:String,
      default:'今日推荐'
    },
    type:{
      type:Number,
      default:1
    },
    size:{
      type:Number,
      default:6
    },
    offset:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      song_list:[]
    }
  },
  mounted(){
    request.getDataFun({type:this.type,size:this.size,offset:this.offset},res=>{ 
        this.song_list = res.data.song_list
    })
  }
  
}
</script>
<style scoped>

.mod-albums {
    background-color: #fff;
    padding: 10px 17px;
}

.hd {
    display: flex;
    margin: 14px 0 18px 0;
}

.hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.hd div {
    width: 64px;
    font-size: 12px;
    text-align: right;
}

.mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
}

 .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}

.mod-albums .gallery .card .album {
  position: relative;
}

.mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}

.mod-albums .gallery .card .name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}

</style>