<template>
  <div class="todo-form">
    <input
      type="text"
      @keyup.enter="isNewItem ? createItem() : saveItem()"
      @input="fixedChange"
      v-model="item"
    />
    <button v-if="isNewItem" v-show="todoArr.length <= 10" @click="createItem">
      Add new item
    </button>
    <button v-else @click="saveItem">Save</button>
    <p>{{ item }}</p>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "AddTodo",
  props: {
    todoArr: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      item: "",
      isNewItem: true,
      currentIndex: NaN,
    };
  },
  methods: {
    createItem() {
      if (this.todoArr.length <= 10) {
        this.item !== ""
          ? this.$emit("createItem", this.item)
          : alert("Enter some data");
        this.item = "";
      }
    },

    fixedChange() {
      eventBus.$on("editItem", (value) => {
        console.log(value.item);
        this.isNewItem = false;
        this.item = value.item;
        this.currentIndex = value.index;
      });
      if (!this.isNewItem) this.todoArr.splice(this.currentIndex, 1, this.item);
    },
    saveItem() {
      console.log(this.currentIndex);
      this.todoArr.splice(this.currentIndex, 1, this.item);
      this.item = ''
      this.isNewItem = true;
    },
  },
};
</script>
<style scoped>
button {
  min-width: 10rem;
}
.todo-form {
  width: 30vw;
  margin: 0 auto;
}
input {
  margin: 0.5rem;
}
</style>
