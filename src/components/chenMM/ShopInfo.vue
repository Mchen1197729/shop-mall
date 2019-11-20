<template>
  <!--chenMM新增的组件：商家详情页(一个路由展示页)-->
  <!-- 路径：/shopinfo?id=1001 -->
  <div class="shop-info">
    <img @click="goBack()" class="back-img" src="./images/arrow-left.png" alt="">
    <div class="shop-info-title">商家详情</div>
    <yd-slider autoplay="3000">
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
    <div class="logo-box">
      <img class="logo" src="./images/logo.png" alt="">
      <div class="shop-name">芙蓉超市丁卯店</div>
      <div class="back-points">80%返积分</div>
    </div>
    <div class="shop-detail-box">
      <div class="open-time">营业时间:8:00-12:00</div>
      <div class="shop-address-box">
        <div>地址:丁卯xx路xx街道xx号</div>
        <div class="navigate">导航</div>
      </div>
      <div class="phone-number">
        <div>联系方式:17788354037</div>
        <div class="contact">拨打</div>
      </div>
      <div class="shop-introduce">店铺介绍:主营啤酒饮料花生瓜子矿泉水</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      goBack () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-info {
    width: 100%;
    height: 100%;
    color: #A9A9A9;
    overflow: hidden;
    background-color: #EFEFF4;

    .shop-info-title{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      font-size: .3rem;
      background-color: #EFEFF4;
    }
    .back-img {
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
      z-index: 999;
    }

    .logo-box {
      width: 100%;
      height: 1.5rem;
      display: flex;
      align-items: center;
      //background-color: pink;
      .logo {
        width: 1rem;
        height: 1rem;
      }

      .shop-name {
        width: 4.5rem;
        font-size: .3rem;
        //background-color: red;
        text-align: left;
      }

      .back-points {
        width: 1.8rem;
        height: .6rem;
        color: #fff;
        font-size: .3rem;
        line-height: .6rem;
        font-weight: bold;
        background-color: #EEAB54;
      }
    }

    .shop-detail-box {
      width: 100%;
      display: flex;
      font-size: .25rem;
      flex-direction: column;
      align-items: center;

      div {
        margin-bottom: .1rem;
      }

      .open-time {
        width: 90%;
        text-align: left;
      }

      .shop-address-box {
        width: 90%;
        display: flex;
        justify-content: space-between;

        .navigate {
          background-color: #EEAB54;
          padding: .02rem .1rem;
          color: #fff;
        }
      }

      .phone-number {
        width: 90%;
        display: flex;
        justify-content: space-between;

        .contact {
          background-color: #EEAB54;
          padding: .02rem .1rem;
          color: #fff;
        }
      }

      .shop-introduce {
        width: 90%;
        text-align: left;
      }
    }
  }
</style>
