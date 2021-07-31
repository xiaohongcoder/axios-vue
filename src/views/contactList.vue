<template>
  <div class="contact-list">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
// import axios from "axios";
// import { Button } from "vant";
import Vue from "vue";
import { ContactList } from "vant";

Vue.use(ContactList);

export default {
  name: "contactList",
  components: {
    // [Button.name]: Button,
    [ContactList.name]: ContactList,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          name: "name",
          tel: "10010",
          isDefault: false,
        },
      ],
    };
  },
  created() {},
  methods: {
    // 添加联系人
    onAdd() {},
    // 编辑联系人
    onEdit() {},
  },
};
</script>

<style>
</style>