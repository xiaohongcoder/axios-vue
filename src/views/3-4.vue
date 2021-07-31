<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-4",
  components: {},
  created() {
    // 拦截器
    // 作用：在请求或响应被处理前拦截

    // 1.请求拦截器
    axios.interceptors.request.use(
      (config) => {
        // 在发送请求前 做些什么
        return config;
      },
      (err) => {
        // 在请求错误的时候做些什么
        return Promise.reject(err);
      }
    );
    // 2.响应拦截器
    axios.interceptors.response.use(
      (res) => {
        // 请求成功 对响应数据做处理
        return res;
      },
      (err) => {
        // 响应错误 做些什么
        return Promise.reject(err);
      }
    );

    // axios
    //   .get()
    //   .then((res) => {})
    //   .catch((err) => {});

    // 取消拦截器 不重要 (了解即可)
    let interceptors = axios.interceptors.request.use((config) => {
      config.headers = {
        auth: true,
      };
      return config;
    });

    // 取消拦截器
    axios.interceptors.request.eject(interceptors);

    // 真实开发的时候 是不会轻易取消的

    // 栗子1 => 需要登录的接口 token
    // 给实例添加 interceptors
    // 而不是给 axios 添加 interceptors，会造成全局污染
    let instance = axios.create({});
    instance.interceptors.request.use((config) => {
      config.headers.token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
      return config;
    });

    // 栗子2 => 不需要登录的接口
    // 给实例添加 interceptors
    // 而不是给 axios 添加 interceptors，会造成全局污染
    let instance_new = axios.create({});

    // 栗子3 移动端开发
    let instance_phone = axios.create({});
    instance_phone.interceptors.request.use((config) => {
      // 在请求前 显示加载弹窗
      $("#showLoading").show();
      return config;
    });

    instance_phone.interceptors.response.use((res) => {
      // 在响应后 隐藏加载弹窗
      $("#showLoading").hide();
      return res;
    });
  },
};
</script>
