<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-1",
  components: {},
  created() {
    // 什么是 axios 实例
    // 后端接口有多个，并且超时时长不一样
    // 在实例中 配置参数，用实例去请求，很方便
    // let arr = []
    // let arr1 = new Array()

    // 第一个实例
    let instance = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 1000,
    });

    instance.get("/data.json").then((res) => {
      console.log(res);
    });

    // 第二个实例
    let instance_hong = axios.create({
      baseURL: "http://localhost:9090",
      timeout: 5000,
    });

    instance_hong.get("/city.json").then((res) => {
      console.log(res);
    });
  },
};
</script>
