<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-2",
  components: {},
  created() {
    // axios 配置参数都有哪些
    // axios create 创建实例
    axios
      .create({
        baseURL: "http://localhost:8080",
        timeout: 5000,
        // 请求路径
        url: "/data.json",
        method: "get",
        headers: {
          // 请求头
          token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        params: {
          // 请求参数 拼接在 url
        },
        data: {
          // 请求参数 放在请求体里
        },
      })
      .then((res) => {
        console.log(res);
      });

    // 优先级 你这么聪明 一定猜得到
    // 1.axios 全局配置
    axios.defaults.timeout = 1000;
    axios.defaults.baseURL = "http://localhost:8080";

    // 2.axios 实例配置
    let instance = axios.create();
    instance.defaults.timeout = 3000;

    // 3.axios 请求配置
    instance.get("/data.json", {
      timeout: 5000,
    });

    // axios.get('/data.json', config)
  },
};
</script>
