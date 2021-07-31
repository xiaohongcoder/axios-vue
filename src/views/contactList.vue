<template>
  <div class="contact-list">
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" :style="{ width: '90%' }">
      <!-- 联系人编辑 -->
      <van-contact-edit
        is-edit
        show-set-default
        :contact-info="editingContact"
        set-default-label="设为默认联系人"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import { ContactList, Toast, ContactEdit } from "vant";
import { Popup } from "vant";

export default {
  name: "contactList",

  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup,
  },

  data() {
    return {
      list: [],

      // axios 实例
      instance: null,

      // 编辑弹窗的 显隐
      showEdit: false,

      // 正在编辑的联系人数据
      editingcontact: {},

      // 新建 or 编辑
      // false 编辑 --- true 新建
      isEdit: false,

      show: false,
    };
  },

  created() {
    console.log("created");
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
        Toast("请稍后重试");
      });
  },

  methods: {
    showPopup() {
      this.show = true;
    },  

    // 添加联系人
    onAdd() {
      console.log("onAdd");
      this.showEdit = true;
      this.isEdit = false;
    },

    // 编辑联系人
    onEdit(info) {
      console.log("onEdit");
      this.show = true;

      this.showEdit = true;
      this.isEdit = true;
      this.editingcontact = info;
    },

    // 保存联系人
    onSave() {},
    // 删除联系人
    onDelete() {},
  },
};
</script>