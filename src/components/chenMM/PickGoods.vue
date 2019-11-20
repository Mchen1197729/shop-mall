<template>
  <!--新增的提货商家的组件-->
  <div class="pick-goods">
    <div @click="handleShowNearShop" class="near-pick-shop">提货商家</div>
    <div class="near-shop-info">
      <div class="address">
        <img src="./images/location.png" alt="">
      </div>
      <div class="name">
        <div>芙蓉超市</div>
        <div>智慧大厦101号</div>
        <div>9:00-21:00</div>
      </div>
      <div class="phone">
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
      handleShowNearShop () {
        //子组件派发自定义事件
        this.$emit('showNearShop')
      },
      goToAllPickShops () {
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
      height: .8rem;
      text-align: left;
      line-height: .8rem;
      font-size: .3rem;
      color: #8D8D8D;
      padding-left: .2rem;
      background-color: #fff;
      margin-bottom: .03rem;
    }

    .near-shop-info {
      width: 100%;
      height: 1rem;
      display: flex;
      background-color: #fff;

      .address {
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

      .name {
        width: 80%;
        height: 100%;
        color: #A9A9A9;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /*background-color: pink;*/
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
