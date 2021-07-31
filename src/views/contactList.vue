<template>
  <div class="contact-list">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
import axios from "axios";
import { ContactList } from "vant";
import { Toast } from "vant";

export default {
  name: "contactList",

  components: {
    [ContactList.name]: ContactList,
  },

  data() {
    return {
      list: [],

      // axios 实例
      instance: null,
    };
  },

  created() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000,
    });

    this.instance
      .get("/contactList")
      .then((res) => {
        console.log(res);
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        Toast('请稍后重试')
      });
  },

  methods: {
    // 添加联系人
    onAdd() {},
    // 编辑联系人
    onEdit() {},
  },
};
</script>