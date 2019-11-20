<template>
  <!--chenMM新增的附近商家列表页-->
  <!-- 对应的路径：/nearshoplist?id=1001 -->
  <div class="near-shop-list">
    <div class="title">附近的商家</div>
    <div class="search-box">
      <div class="address">镇江</div>
      <input type="text" placeholder="搜索商品">
      <div class="search-btn">搜索</div>
    </div>
    <yd-slider class="lunbo" autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="./images/dog1.jpg"/>
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="./images/dog2.jpg"/>
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="./images/dog3.jpg"/>
        </a>
      </yd-slider-item>
    </yd-slider>
    <div class="choose-box">
      <div>综合</div>
      <div>离我最近</div>
      <div>返积分最高</div>
      <div @click="handleToggleTheme">切换视图</div>
      <div @click="showPopup">分类和筛选</div>
    </div>
    <!--display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'-->
    <van-popup class="chenMM" v-model="show" closeable close-icon="close" close-icon-position="top-left"
               :style="{ height: '100%',width:'20%'}"
               position="right">
      <div class="choose-item">超市</div>
      <div class="choose-item">水果</div>
      <div class="choose-item">餐饮</div>
      <div class="choose-item">药店</div>
      <div class="choose-item">娱乐</div>
    </van-popup>
    <yd-list :theme="theme">
      <yd-list-item v-for="(item, key) in list" :key="key">
        <img slot="img" :src="item.img">
        <span slot="title">{{item.title}}</span>
        <yd-list-other slot="other">
          <div>
            <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
            <span class="demo-list-del-price">¥{{item.w_price}}</span>
          </div>
          <div>content</div>
        </yd-list-other>
      </yd-list-item>
    </yd-list>
  </div>
</template>

<script>
  export default {
    beforeMount () {
      //页面滚动条处于初始位置
      window.scrollTo(0, document.body.scrollHeight)
    },
    data () {
      return {
        theme: 3,
        list: [
          {
            img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
            title: '标题111标题标题标题标题',
            price: 156.23,
            w_price: 89.36
          },
          {
            img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
            title: '标题222标题标题标题标题',
            price: 256.23,
            w_price: 89.36
          },
          {
            img: '//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg',
            title: '标题333标题标题标题标题',
            price: 356.23,
            w_price: 89.36
          },
          {
            img: '//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg',
            title: '标题444标题标题标题标题',
            price: 456.23,
            w_price: 89.36
          },
          {
            img: '//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg',
            title: '标题555标题标题标题标题',
            price: 556.23,
            w_price: 89.36
          },
          {
            img: '//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg',
            title: '标题666标题标题标题标题',
            price: 656.23,
            w_price: 89.36
          }
        ],
        keyword: '',
        show: false,
      }
    },
    methods: {
      showPopup () {
        this.show = true
      },
      //切换视图
      handleToggleTheme () {
        this.theme = (this.theme + 1) % 3 + 3
        return
      }
    }
  }
</script>

<style lang="less" scoped>
  .choose-item {
    &:first-child {
      margin-top: 3rem;
    }

    color: #666;
    font-size: .3rem;
    margin: .1rem 0;
  }

  .near-shop-list {
    width: 100%;
    height: 100%;
    background-color: #EFEFF4;

    .title {
      width: 100%;
      font-size: .4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 1rem;
    }

    .search-box {
      width: 100%;
      height: 1rem;
      display: flex;
      align-items: center;
      font-size: .3rem;
      background-color: #ffffff;

      .address {
        width: 15%;
      }

      input {
        width: 70%;
        height: .7rem;
        line-height: .7rem;
        padding-left: .3rem;
        border-radius: .35rem;
        /*outline: none;*/
        background-color: #fff;
        border: 1px solid #888;
        -webkit-appearance: none;
      }

      .search-btn {
        width: 15%;
      }
    }

    .lunbo {
      width: 100%;
      height: 3.5rem;
    }

    .choose-box {
      width: 100%;
      height: .6rem;
      font-size: .25rem;
      margin: .2rem 0;
      border: 1px solid #999;
      display: flex;
      align-items: center;
      padding: 0 .1rem;
      color: #666;
      justify-content: space-between;
    }
  }
</style>
