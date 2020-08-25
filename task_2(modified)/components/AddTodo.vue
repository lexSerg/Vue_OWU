<template>
  <div class="todo-form">
    <Form
      @createItem="createItem"
      @saveItem="saveItem"
      :isNewItem="isNewItem"
      :todoArr="todoArr"
    />
    <LiveDataBlock :item='item'/>


  </div>
</template>

<script>
import { eventBus } from "@/main";
import Form from "@/components/Form";
import LiveDataBlock from "@/components/LiveDataBlock";
export default {
  name: "AddTodo",
  components: {
    Form,
    LiveDataBlock,
  },
  props: {
    todoArr: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      item: null,
      isNewItem: true,
      currentIndex: NaN,
    };
  },
  created() {
      eventBus.$on("editItem", (value) => {
        console.log(value, "Value");
        this.isNewItem = false;
        this.item = value.item;
        console.log(this.item);
        this.currentIndex = value.index;
      });
      if (!this.isNewItem) this.todoArr.splice(this.currentIndex, 1, this.item);
  },
  methods: {
    createItem(event) {
      console.log(event);
      if (this.todoArr.length <= 10) {
        this.item !== {}
          ? this.$emit("createItem", event)
          : alert("Enter some data");
        this.item = {};
      }
    },
    saveItem(event) {
      let currentItem = Object.assign({},event)
      this.todoArr.splice(this.currentIndex, 1, currentItem);
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
  padding: 2rem;
  display: flex;
  justify-content: center;
}
input {
  margin: 0.5rem;
}
</style>
