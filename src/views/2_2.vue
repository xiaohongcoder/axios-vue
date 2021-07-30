<template>
  <div class="2-2"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "axios2_2",
  components: {},

  created() {
    // get
    axios
      .get("/data.json", {
        params: {
          id: 12,
        },
      })
      .then((res) => {
        console.log("1", res);
      });

    axios({
      method: "get",
      url: "/data.json",
      params: {
        id: 15,
      },
    }).then((res) => {
      console.log("2", res);
    });
  },
};
</script>
