<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios3-5",
  components: {},
  // 取消请求 取消正在进行的 http 请求
  // 知道就好 使用不多
  created() {
    let source = axios.CancelToken.source();

    axios
      .get("/data.json", {
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // 取消请求 (message 可选)
    source.cancel('cancel http')

    // 什么情况下可能用到 取消请求
    // CRM 大批量数据 3-5 没有反应

  },
};
</script>
