<template>
  <div class="todo-item">
    <div class="todo-item-content">
      <h4>{{ item }}</h4>
    </div>
    <div class="todo-item-btns">
      <button @click="remove">Remove item</button>
      <button @click="edit">Edit item</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "TodoItem",
  props: {
    item: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: NaN,
    },
    todoArr: {
      type: Array,
      default: null,
    },
  },
  methods: {
    remove() {
      this.$emit("removeItem", this.index);
    },
    edit() {
      console.log(this.item);
      eventBus.$emit("editItem", { item: this.item, index: this.index });
    },
  },
};
</script>
<style scoped>
.todo-item {
  display: flex;
  width: 75vw;
  border: 2px solid black;
  margin: 2px auto;
}
.todo-item-content {
  width: 70%;
  height: auto;
  text-align: center;
}
.todo-item-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
button {
  padding: 0.5rem 0.5rem;
}
</style>
