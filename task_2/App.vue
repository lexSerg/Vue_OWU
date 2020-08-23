<template>
  <div>
    <addTodo @createItem="createItem" :todoArr="todoArr"/>
    <todoList :todoArr="todoArr" @removeItem="removeItem" />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
  },
  data() {
    return {
      todoArr: [],
    };
  },
  methods: {
    createItem(event) {
      this.todoArr.push(event);

    },
    removeItem(event) {
      this.todoArr.splice(event, 1);
    },
  },
};
</script>

<style>
</style>
