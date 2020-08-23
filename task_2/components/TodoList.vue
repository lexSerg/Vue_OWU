<template>
  <div>
    <div v-for="(item, i) in todoArr" :key="i">
      <TodoItem :item="item" :index="i" :todoArr="todoArr" @removeItem="removeItem" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    todoArr: {
      type: Array,
      default: null,
    },
  },
  methods: {
    removeItem(event) {
      this.$emit('removeItem', event)
    },
  },
};
</script>
