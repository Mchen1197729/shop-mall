<template>
  <!--chenMM新添加的组件-->
  <div class="goods-info">
    <span @click="goToShopInfo(1001)">商家详情</span>
    <span @click="goToNearShopList(1001)">附近商家</span>
  </div>
</template>

<script>
  export default {
    // name:'商品详情',
    data () {
      return {}
    },
    methods: {
      //跳转到商家详情的展示页面
      goToShopInfo (id) {
        this.$router.push('/shopinfo?shop_id=' + id + '&goods_id=' + this.$route.query.goods_id)
      },
      //跳转到附近商家列表
      goToNearShopList (id) {
        this.$router.push('/nearshoplist?shop_id=' + id + '&goods_id=' + this.$route.query.goods_id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .goods-info {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.2rem;
    //background-color: pink;
    text-align: left;
    font-size: .28rem;
    color: #8D8D8D;
    margin-bottom: 0.15rem;
    /*background-color: #FFFFFF;*/
    span{
      margin-right: .2rem;
    }
  }
</style>
