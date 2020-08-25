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
      currentItem : null
    };
  },
  methods: {
    createItem(event) {
      console.log(event);
      this.currentItem = Object.assign({}, event)
      this.todoArr.push(this.currentItem);
    },
    removeItem(event) {
      this.todoArr.splice(event, 1);
    },
  },
};
</script>

<style>
p, h4 {
  word-wrap: break-word;
}
button {
  border-radius: 3rem;
  min-width: 7rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-shadow: -1px -1px #000;
  padding: .8rem 1rem;
  outline: none;
  background-color: #000;
  background-image: linear-gradient(45deg, rgba(255,255,255,.0) 30%, rgba(255,255,255,.8), rgba(255,255,255,.0) 70%), radial-gradient(190% 100% at 50% 0%, rgba(255,255,255,.7) 0%, rgba(255,255,255,.5) 50%, rgba(0,0,0,0) 50%);
  background-repeat: no-repeat;
  background-position: 200% 0, 0 0;
  box-shadow: rgba(0,0,0,.3) 0 2px 5px;
}
button:hover{
  background-size: 200% 100%, auto;
}
</style>
