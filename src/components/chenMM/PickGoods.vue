<template>
  <!--新增的提货商家的组件-->
  <div class="pick-goods">
    <div @click="handleShowNearShop" class="near-pick-shop">提货商家</div>
    <div class="near-shop-info">
      <div class="address">
        <img src="./images/location.png" alt="">
       <!-- <p>距您200米</p>-->
      </div>
      <div class="name">
        <div class="shop-name">芙蓉超市</div>
        <div>智慧大厦101号(距您200米)</div>
        <div>9:00-21:00</div>
      </div>
      <div @click="handleGoToAllPickShops" class="more-shop">
        更多商家
      </div>
      <div @click="showPhoneNumber" class="phone">
        <img src="./images/phone.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      showPhoneNumber(){
        //子组件派发自定义事件
        this.$emit('showPhoneNumber')
      },
      handleShowNearShop () {
        //子组件派发自定义事件
        this.$emit('showNearShop')
      },
      handleGoToAllPickShops () {
        //子组件派发自定义事件
        this.$emit('goToAllPickShops')
      }
    }
  }
</script>

<style lang="less" scoped>
  .pick-goods {
    width: 100%;

    .near-pick-shop {
      width: 100%;
      height: .4rem;
      text-align: left;
      line-height: .4rem;
      font-size: .25rem;
      padding-left: .2rem;
      background-color: #F9F9F9;
      margin-bottom: .03rem;
    }

    .near-shop-info {
      width: 100%;
      height: 1rem;
      display: flex;
      background-color: #fff;
      margin-bottom: .03rem;

      .address {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
          width: .5rem;
          height: .5rem;
        }

        p {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: .2rem;
          color: #A9A9A9;
        }
      }

      .name {
        width: 60%;
        height: 100%;
        color: #A9A9A9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        /*background-color: pink;*/

        .shop-name {
          font-weight: bold;
          font-size: .28rem;
        }
      }

      .more-shop{
        width: 20%;
        height: 100%;
        display: flex;
        color: #8D8D8D;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .phone {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: .5rem;
          height: .5rem;
        }
      }
    }
  }
</style>
