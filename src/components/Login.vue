<template>
  <h1>欢迎来到登录界面</h1>
  <button @click="goHome">回首页</button>
</template>

<!--vue3方式 <script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const state = reactive({ count: 0 });
const router = useRouter();

const goHome = () => {
  router.push("/welcome");
};
</script>-->

<script>
export default {
  name:"login",
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>


<style scoped></style>
