<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios2_3_put_patch",
  components: {},

  created() {
    // delete
    axios
      .delete("/delete", {
        params: {
          id: 12,
        },
      })
      .then((res) => {
        console.log("与后端沟通");
        console.log("Query String Parameters");
        console.log("params in url", res);
      });

    axios
      .delete("/delete", {
        data: {
          id: 15,
        },
      })
      .then((res) => {
        console.log("与后端沟通");
        console.log("Request Payload");
        console.log("data not in url", res);
      });

    axios({
      method: "delete",
      url: "/delete",
      params: {},
      data: {},
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>
