<template>
    <div>
      <ul class="shoping">
        <li v-for="(item,index) in add">
          <img src="../assets/nav.png" alt="" >
          <h3>{{item.title}}</h3>
          <p>{{item.sort}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from "axios"

    export default {
        name: "List",
        data(){
          return{
            add:[]
          }
        },
      mounted() {
        axios.get("../../static/fenlei.json").then(res=>{
          console.log(res);
          this.add = res.data.result
          console.log(this.list)
        })
      }
    }
</script>

<style scoped>
  .shoping{
    display: flex;
    flex-wrap: wrap;
  }
  .shoping li{
    width: 50%;
  }
  .shoping li img{
    width: 200px;
    /*height: ;*/
  }
</style>
