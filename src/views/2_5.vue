<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios2_5",
  components: {},

  created() {
    // 并发请求：同时进行多个请求，并统一处理返回值
    // axios.all([], [])
    // axios.spread()
    axios.all([axios.get("./data.json"), axios.get("./city.json")]).then(
      axios.spread((res1, res2) => {
        console.log(res1, res2);
      })
    );
  },
};
</script>
