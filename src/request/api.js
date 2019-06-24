import axios from './instance.js'


let api={
  // 今日推荐(没有拦截就要加上   /api  头部)
  // todayrecommend:`/api/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0`

  // todayrecommend:`/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0`,

  // 新歌快递
  // newsMusic:`/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3&offset=0`,


  //音乐列表(地址通过props来传递,不能在对象里边直接使用变量type，未定义)
  // reqUrl : `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=5&offset=0`

}




export default {
  getDataFun(params,callback){
   axios.get(`/v1/restserver/ting`,{
      // params:params
      params:{
        method:"baidu.ting.billboard.billList",
        type:params.type,
        size:params.size,
        offset:params.offset
      }
    })
    .then(res=>{
      callback(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  // 获取详细的单个歌曲资源
  getSingleMusic(params,callback){
    axios.get(`/v1/restserver/ting`,{
      params:{
        method:'baidu.ting.song.play',
        songid:params.songid
      }
    })
    .then(res=>{
      callback(res)
    })
    .catch(err=>{
      console.log(err)
    })

  },
  // 获取详细的单个歌曲de 歌词
  getLrc(params,callback){
    axios.get(`/v1/restserver/ting`,{
      params:{
        method:'baidu.ting.song.lry',
        songid:params.songid
      }
    })
    .then(res=>{
      callback(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  // 歌手列表
  getArtists(params,callback){
    axios.get(`/v1/restserver/ting`,{
      params:{
        method:'baidu.ting.artist.getInfo',
        tinguid:params.tinguid
      }
    })
    .then(res=>{
      callback(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  // 歌手的歌曲列表
  getArtistList(params,callback){
    axios.get(`/v1/restserver/ting`,{
      params:{
        method:'baidu.ting.artist.getSongList',
        tinguid:params.tinguid,
        limits:10,
        use_cluster:1,
        order:2
      }
    })
    .then(res=>{
      callback(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
    // 歌曲搜索
    getSongs(params,callback){
      axios.get(`/v1/restserver/ting`,{
        params:{
          method:'baidu.ting.search.catalogSug',
          query:params.query
        }
      })
      .then(res=>{
        callback(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }




}




