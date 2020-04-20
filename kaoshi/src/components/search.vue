<template>
    <div>
      <p><button @click="fh">返回</button></p>

      <input type="text" v-model="agg" @keyup="add">
      <button>取消</button>
      <p>历史记录</p>

      <ul class="search">
        <li v-for="(item,index) in list" :key="index">
          {{item}}
        </li>
      </ul>

<!--      {{rst}}-->
    </div>
</template>

<script>
  import axios from "axios"

    export default {
        name: "search",
      data(){
          return{
            agg:'',
            list:[],
            rst:[]
          }
      },
      mounted(){
          axios.get("../../static/list.json").then(res=>{
            console.log(res)
            this.rst = res.data.result
          })
      },
      methods:{
          add(e){
            if(e.keyCode==13){
              this.list.push(this.agg);
              this.agg = ''
            }

          },
        fh(){
          this.$router.go(-1)
        }
      },

    }
</script>

<style scoped>
    input{
      width: 300px;
      margin-left: 50px;
    }

    .search{
      display: flex;
      justify-content: space-around;
    }

  .search li{
    width: 60px;
    border: 1px solid #d5d5d5;
  }
</style>
