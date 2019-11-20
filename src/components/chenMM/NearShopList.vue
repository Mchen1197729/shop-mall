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
