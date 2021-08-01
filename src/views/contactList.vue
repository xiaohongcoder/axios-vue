<template>
  <div class="contact-list">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />

    <van-popup v-model="showEdit" :style="{ width: '90%' }">
      <!-- 联系人编辑 -->
      <!-- <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      /> -->
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
      editingContact: {},

      // 添加 or 编辑
      // false 添加 --- true 编辑
      isEdit: false,
    };
  },

  created() {
    console.log("created");
    this.getList();
  },

  methods: {
    // 获取 联系人列表
    async getList() {
      let res = null;
      res = await this.$Http.getContactList();
      console.log(res);
      setTimeout(function () {
        console.log(res);
      }, 3000);
      this.list = res.data;
    },

    // 添加 联系人
    onAdd() {
      console.log("onAdd");

      this.showEdit = true;
      this.isEdit = false;
    },

    // 编辑 联系人
    onEdit(info) {
      console.log("onEdit info", info);

      this.showEdit = true;
      this.isEdit = true;
      this.editingContact = info;
    },

    // 保存联系人
    async onSave(info) {
      console.log("onSave info", info);
      if (this.isEdit) {
        // 编辑保存
        console.log("编辑保存");
        this.instance
          .patch("/contact/edit", info)
          .then((res) => {
            console.log(res);
            if (res.data.code === 200) {
              Toast("保存成功");
              this.showEdit = false;
              this.getList();
            }
          })
          .catch(() => {
            Toast("保存失败");
          });
      } else {
        // 添加保存
        console.log("添加保存");

        let res = await this.$Http.newContactJson(info, false);
        console.log(res);
        if (res.code === 200) {
          Toast("新建成功");
          this.showEdit = false;
          this.getList();
        }
      }
    },
    // 删除联系人
    onDelete(info) {
      console.log("onDelete info", info);
    },
  },
};
</script>