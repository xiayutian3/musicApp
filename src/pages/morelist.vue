<template>
  <div class="more-list">
    <div class="wrapper">
      <h3>{{ $route.params.title }}</h3>
    </div>
    <div class="scrol-wrap" ref="scrolWrap">
      <div class="content">
        <div v-if="topTip" class="top-tip">{{topText}}</div>
        <div class="scrol-inner">
          <div
            class="info url log"
            @click="$router.push({name:'MusicPlay',params:{songid:item.song_id}})"
            v-for="(item,index) in song_list"
            :key="index"
          >
            <div class="poster">
              <img :src="item.pic_big" :alt="item.title">
            </div>
            <div class="text-wrap">
              <div class="title">{{ item.title }}</div>
              <div class="author">{{ item.artist_name }}</div>
            </div>
          </div>
        </div>
        <div v-if="bottomTip" class="bottom-tip">{{bottomText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/request/api.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      song_list: [],
      type: this.$route.params.type,
      size: this.$route.params.size,
      offset: this.$route.params.offset,
      topTip: false,
      topText: "下拉刷新", // 松开立即刷新
      bottomTip: false,
      bottomText: "加载更多"
    };
  },
  mounted() {
    request.getDataFun(
      { type: this.type, size: this.size, offset: this.offset },
      res => {
        this.song_list = res.data.song_list;
      }
    );
    this.$nextTick(()=>{
      this._initBS();
    })
    
  },
  methods: {
    getData(type, size, offset) {
      request.getDataFun({ type: type, size: size, offset: offset }, res => {
        this.song_list = res.data.song_list;
      });
    },
    _initBS() {
      this.listScroll = new BScroll(this.$refs.scrolWrap, {
        probeType: 2,
        click: true
      });
      this.listScroll.on("scroll", pos => {
        // 下拉动作
        if (pos.y > 50) {
          this.topText = "松开立即刷新";
        } else {
          this.topText = "下拉刷新";
        }
        if (pos.y > 0) {
          this.topTip = true;
        } else {
          this.topTip = false;
        }


        // 上拉动作
        // if (this.pullup) {

        // }
      });

      this.listScroll.on("scrollEnd", () => {
        // 滚动到底部
        if (this.listScroll.y <= this.listScroll.maxScrollY + 50) {
          // this.$emit('scrollToEnd')
          this.bottomText = "正在加载中~~~";
          this.offset += 12;
          request.getDataFun(
            { type: this.type, size: this.size, offset: this.offset },
            res => {
              if (res.data.song_list) {
                this.song_list = this.song_list.concat(res.data.song_list);
                this.bottomText = "加载更多";
              } else {
                this.bottomText = "数据已经加载完了";
              }
            }
          );
        }
      });

      this.listScroll.on("touchEnd", pos => {
        // 重置提示信息
        this.topText = "正在刷新请稍等~";
        setTimeout(() => {
          this.topTip = false;
        }, 1000);
        if(!this.bottomTip){
          this.bottomTip = true;
        }
      });
    }
  }
};
</script>
<style scoped>
.top-tip{
  text-align: center;
}
.bottom-tip{
  text-align: center;
}
html,
body {
  height: 100%;
}
.more-list {
  height: calc(100% - 50px);
}
.scrol-wrap {
  height: calc(100% - 47px);
}
.scrol-inner {
  overflow: hidden;
  background: #fff;
}
.wrapper {
  position: relative;
  padding-top: 13px;
  text-align: center;
  /* height: 100%; */
  background: #fff;
  clear: both;
  overflow: hidden;
  z-index: 1;
}

h3 {
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.info {
  width: 45%;
  float: left;
  text-align: center;
  padding-left: 17px;
  display: block;
  text-align: left;
  margin-bottom: 10px;
  position: relative;
  height: 192px;
}
.info .title,
.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>


