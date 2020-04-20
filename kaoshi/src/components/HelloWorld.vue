<template>
  <div class="hello">
    <div><img src="../assets/banner.png" alt="" class="banner"></div>
    
    <div class="search">
      <input type="text" placeholder="搜索商品" @click="searchs">
    </div>
    
    <ul class="shao">
      <li><router-link to="/fenlei">女装</router-link></li>
      <li><router-link to="/List">男装</router-link></li>
      <li>童装</li>
      <li>幼儿</li>

    </ul>

    <router-view/>

    
    <ul class="nav">
      <li>首页</li>
      <li>分类</li>
      <li>购物车</li>
      <li>个人</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[],
    }
  },
  methods:{
    searchs(){
      this.$router.push("/search")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
  }
  .nav li{
    height: 50px;
    line-height: 50px;
  }
  .banner{
    width: 100%;
  }
  .search input{
    width: 400px;
    margin-top: 5px;
    height: 30px;
    margin-left: 28px;
  }
  .shao{
    display: flex;
    justify-content: space-around;
  }
</style>
