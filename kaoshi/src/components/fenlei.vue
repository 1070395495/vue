<template>
    <div>

      <button @click="px">排序</button>

      <ul class="shoping">
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.pic" alt="" >
          <h5>{{item.title}}</h5>
          <p>价格:{{item.old_price}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "fenlei",
      data(){
          return{
            list:[]
            // tip:false
          }
      },
      mounted() {
        axios.get("../../static/list.json").then(res=>{
          console.log(res);
          this.list = res.data.result;
          console.log(this.list)
        })
      },
      methods:{
          px(){
            this.tip = !this.tip;
            //sort排序方法
            this.list.sort((a,b)=>{
              //判断tip为true的话
              if(this.tip){
                //价格从高到低
                return b.old_price - a.old_price
              }else {
                //价格从低到高
                return a.old_price - b.old_price
              }
            })
          }
      }
    }
</script>

<style scoped>
  .shoping{
    display: flex;
    flex-wrap: wrap;
    height: 2000px;
  }
  .shoping li{
    width: 50%;
  }
  .shoping li img{
    width: 200px;
    /*height: ;*/
  }
</style>
