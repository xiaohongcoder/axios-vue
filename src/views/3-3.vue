<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-3",
  components: {},
  created() {
    // 实际开发
    // axios 全局配置很少用到 局限性很大
    // 声明一个实例 在实例里配置
    // 有两种请求接口
    // http://localhost:9090
    // http://localhost:9091
    let instanct_one = axios.create({
      baseURL: "http://localhost:9090",
      timeout: 1000,
    });

    let instance_two = axios.create({
      baseURL: "http://localhost:9091",
      timeout: 3000,
    });

    // baseURL, timeout, url, method, params
    instanct_one
      .get("/contactList", {
        params: {},
      })
      .then((res) => {
        console.log(res);
      });

    instance_two
      .get("/orderList", {
        // 3000 不能满足，改为 5000
        timeout: 5000,
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
