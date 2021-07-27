<template>
  <h1>欢迎来到登录界面</h1>
  <el-button @click="goHome">回首页</el-button>
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
  name: "login",
  mounted() {
    this.$request
      .get("/login", { username: "jack" }, { withCredentials: true })
      .then((data) => {
        console.log(data);
      });
  },
  methods: {
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>

<style scoped></style>
