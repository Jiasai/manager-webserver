<template>
  <h1>欢迎来到主界面</h1>
  <router-link to="/login">去登陆</router-link>
</template>

<script>
    export default {
      name:"Welcome",
      mounted(){
        this.$storage.setItem("userInfo",{name:"lisi",address:"xxx小区"})
        console.log(this.$storage.getItem("userInfo"))
        this.$storage.clearAll()

      }
    }
</script>

<style scoped>

</style>
