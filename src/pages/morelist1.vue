<template>
  <div class="more-list">
    <div class="wrapper">
      <h3>{{ $route.params.title }}</h3>
    </div>
    <div class="scrol-wrap" ref="scrolWrap">
      <div class="content">
        <!-- <div v-if="topTip" class="top-tip">下拉刷新</div> -->
        <div class="scrol-inner">
          <div class="info url log" @click="$router.push({name:'MusicPlay',params:{songid:item.song_id}})" v-for="(item,index) in song_list" :key="index">
            <div class="poster">
              <img :src="item.pic_big" :alt="item.title">
            </div>
            <div class="text-wrap">
              <div class="title">{{ item.title }}</div>
              <div class="author">{{ item.artist_name }}</div>
            </div>
          </div>
        </div>
        <!-- <div v-if="bottomTip" class="bottom-tip">上拉加载更多</div> -->
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
      topTip:false,
      bottomTip:false
    };
  },
  mounted() {
    request.getDataFun(
      { type: this.type, size: this.size, offset: this.offset },
      res => {
        this.song_list = res.data.song_list;
      }
    );
    this._initBS();
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
        click: true,
        pullUpLoad: {
          threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
        },
        pullDownRefresh: {
          threshold: 30, // 下拉距离超过30px触发pullingDown事件
          stop: 20 // 回弹停留在距离顶部20px的位置
        }
      });

      this.listScroll.on("pullingUp", () => {
        // this.bottomTip = true
        this.offset += 12;
        request.getDataFun(
          { type: this.type, size: this.size, offset: this.offset },
          res => {
            if (res.data.song_list) {
              this.song_list = this.song_list.concat(res.data.song_list);
              console.log(this.song_list);
            }
          }
        );
        this.listScroll.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
      });

      this.listScroll.on("pullingDown", () => {
        // this.topTip = true
        // this.listScroll.refresh();  //刷新DOM结构
        this.song_list = this.song_list
        console.log("pullingDown");
        this.listScroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
      });
    }
  }
};
</script>
<style scoped>
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


