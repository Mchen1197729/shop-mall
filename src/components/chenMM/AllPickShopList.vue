<template>
  <div class="all-pick-shop-list">
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
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .all-pick-shop-list {
    width: 100%;
    height: 100%;
    /*background-color: pink;*/
  }
</style>
