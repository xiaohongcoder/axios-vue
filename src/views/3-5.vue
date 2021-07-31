<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-5",
  components: {},
  // 错误处理
  created() {
    // 请求拦截器
    // axios.interceptors.request.use(
    // (config) => {
    // return config;
    // },
    // (err) => {
    // 请求错误
    // 404 资源不存在
    // 401 请求超时
    // return Promise.reject(err);
    // }
    // );

    // 响应拦截器
    // axios.interceptors.response.use(
    //   (res) => {
    //     return res;
    //   },
    //   (err) => {
    //     return Promise.reject(err);
    //   }
    // );

    axios
      .get("data.json")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // 栗子：实际开发过程中，一般添加 统一错误处理
    let instance = axios.create({});
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        // 请求错误 一般 4xx 404 401
        // $('#modal').show()
        // setTimeout(() => {
        //   $("#modal").hide();
        // }, 3000);
        return Promise.reject(err);
      }
    );

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        // 响应错误处理 5xx
        // 500 系统错误
        // 502 系统重启
        // $('#modal').show()
        // setTimeout(() => {
        //   $("#modal").hide();
        // }, 3000);
        return Promise.reject(err);
      }
    );

    instance
      .get("/data.json")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
