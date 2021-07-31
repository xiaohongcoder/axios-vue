<template>
  <div>
    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>
// import axios from "axios";
import { Button } from "vant";

export default {
  name: "contactList",
  components: {
    [Button.name]: Button,
  },
  created() {},
};
</script>

<style>
</style>