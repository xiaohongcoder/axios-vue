<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios2_3_put_patch",
  components: {},

  created() {
    // form-data 表单提交（图片上传，文件上传）
    // application/json
    let data = {
      id: 12,
    };

    // put
    axios.put("/put", data).then((res) => {
      console.log("put", res);
    });

    // patch
    axios.patch("/patch", data).then((res) => {
      console.log("patch", res);
    });

    // form-data 请求
    // Content-Type: multipart/form-data;
    //   boundary=----WebKitFormBoundaryK5x3fzA72aKl2vN3
    // let formData = new FormData();
    // for (let key in data) {
    //   formData.append(key, data[key]);
    // }
    // axios.post("/post", formData).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
