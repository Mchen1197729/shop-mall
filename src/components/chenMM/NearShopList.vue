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
      <van-dropdown-menu class="dropdown-menu-box">
        <van-dropdown-item v-model="value1" :options="option1"/>
        <van-dropdown-item title-class="dropdown-item" title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="超市"/>
          <van-switch-cell v-model="switch2" title="水果"/>
          <van-switch-cell v-model="switch3" title="餐饮"/>
          <van-switch-cell v-model="switch4" title="药店"/>
          <van-switch-cell v-model="switch5" title="娱乐"/>
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <yd-list theme="4">
      <yd-list-item v-for="(item, key) in list" type="link" :href="item.href" :key="key">
        <img slot="img" :src="item.img">
        <span class="shop-name" slot="title">{{item.title}}</span>
        <yd-list-other slot="other">
          <div>
            <span class="open-time"><em>营业时间：</em>{{item.open_time}}</span>
          </div>
          <div>
            <img class="location" src="./images/location.png" alt="">
          </div>
        </yd-list-other>
        <yd-list-other slot="other">
          <div>
            <span class="shop-address"><em>地址：</em>{{item.location}}</span>
          </div>
          <div class="shop-distance">{{item.distance}}</div>
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
        value1: 0,
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
        option1: [
          {text: '默认', value: 0},
          {text: '价格升序', value: 1},
          {text: '价格降序', value: 2},
          {text: '销量升序', value: 3},
          {text: '销量降序', value: 4}
        ],
        list: [
          {
            img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
            title: '开源超市(80%返积分)',
            price: 156.23,
            w_price: 89.36,
            open_time: '9:00-21:00',
            location: '智慧大道1001号',
            distance: '100米',
            href:'/shopinfo?shop_id=1001&goods_id=9'
          },
          {
            img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
            title: '开源超市(80%返积分)',
            price: 256.23,
            w_price: 89.36,
            open_time: '9:00-21:00',
            location: '智慧大道1001号',
            distance: '100米',
            href:'/shopinfo?shop_id=1001&goods_id=9'
          }
        ],
        keyword: '',
        show: false,
      }
    },
    methods: {
      onConfirm () {
        this.$refs.item.toggle()
      },
    }
  }
</script>

<style lang="less" scoped>
  .choose-item {
    &:first-child {
      margin-top: 3rem;
    }

    color: #A9A9A9;
    font-size: .3rem;
    margin: .1rem 0;
  }

  .near-shop-list {
    width: 100%;
    height: 100%;
    background-color: #EFEFF4;

    .shop-name {
      color: #A9A9A9;
      font-weight: bold;
      font-size: .27rem;
    }

    .location {
      width: .45rem;
      height: .45rem;
    }

    .title {
      width: 100%;
      font-size: .3rem;
      display: flex;
      color: #A3A3A3;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: .8rem;
    }

    .search-box {
      width: 100%;
      color: #A9A9A9;
      height: .9rem;
      display: flex;
      align-items: center;
      font-size: .25rem;
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
        border: 1px solid #EAEAEA;
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
      /*margin: .2rem 0;*/
      /*border: 1px solid #999;*/
      display: flex;
      align-items: center;
      /*padding: 0 .1rem;*/
      color: #A9A9A9;
      justify-content: space-between;

      .dropdown-menu-box {
        width: 100%;
        height: 100%;
        font-size: .2rem;
      }
    }
  }
</style>
<!--.van-dropdown-menu__title-->
