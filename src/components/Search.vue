<template>
  <div class="search">
    <router-link to="/searchpage">
      <div class="search-input">
        <div class="location">
          镇江
          <img src="../../static/image/location.png" alt="">
        </div>
        <form action="" method="post">
          <i class="search-icon"></i>
          <input type="text" value="" placeholder="搜索商品"/>
        </form>
        <div class="scan">
          <img src="../../static/image/scan.png"/>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style type="text/css">
  .search .search-input {
    display: flex;
  }

  .search .search-input .location {
    width: 20%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /*background-color: pink;*/
    color: #777;
    font-size: .3rem;
    font-weight: bold;
  }
  .search .search-input .location img{
    width: .4rem;
    height: .4rem;
  }

  .search .search-input .scan {
    width: 15%;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*background-color: pink;*/
  }

  .search .search-input .scan img {
    width: .5rem;
    height: .5rem;
  }

  .search .search-input form {
    width: 65%;
    height: 1rem;
    padding: .2rem;
    position: relative;
  }
</style>
