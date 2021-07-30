<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios2_3",
  components: {},

  created() {
    // post
    // form-data 表单提交（图片上传，文件上传）
    // application/json
    let data = {
      id: 12,
    };

    axios.post("/post", data).then((res) => {
      console.log(res);
    });

    axios({
      method: "post",
      url: "/post",
      data,
    }).then((res) => {
      console.log(res);
    });

    // form-data 请求
    // Content-Type: multipart/form-data;
    //   boundary=----WebKitFormBoundaryK5x3fzA72aKl2vN3
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    axios.post("/post", formData).then((res) => {
      console.log(res);
    });
  },
};
</script>
