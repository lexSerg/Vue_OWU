<template>
  <div class="container">
    <input type="text" v-model="item" />
    <button :class="showBtnClass()" @click="createItem">Add new item</button>
    <!-- v-for="(ingredient, index) in ingredients" :key="index" -->
    <ul v-if="todo.length > 0">
      <span v-for="(itemTodo, index) in todo" :key="index">
        <li class="td-item">
          <p class="td-title">{{ itemTodo }}</p>
          <div class="btn-wrap">
            <button class="td-btn" @click="removeItem(index)">
              Remove Item
            </button>
          </div>
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoVue",
  data() {
    return {
      todo: [],
      item: "",
      btnClass: "",
    };
  },
  //  computed: {
  //   showBtn : function() {
  //     this.todo.length > 10
  //       ? (this.btnClass = "visually-hidden")
  //       : (this.btnClass = "visible");
  //     return this.btnClass;
  //  ? Почему то не работает
  //   }
  //  },

  methods: {
    createItem() {
      this.todo.push(this.item);
      this.item = "";
    },
    removeItem(index) {
      this.todo = this.todo.filter((value, i) => i !== index);
    },
    showBtnClass() {
      this.todo.length > 10
        ? (this.btnClass = "visually-hidden")
        : (this.btnClass = "visible");
      return this.btnClass;
    },
  },
};
</script>

<style>
ul {
  padding: 0;
  width: 75%;
}
.container {
  margin: 0 auto;
}
.visually-hidden {
  visibility: hidden;
}
.td-item {
  display: flex;
  justify-items: center;
  margin: 0 auto;
  text-align: center;
}
.td-title {
  font-size: 2rem;
  color: brown;
  width: 50%;
}
.td-btn {
  background-color: blueviolet;
  border-radius: 2rem;
  margin: 45px auto 0;
  max-height: 2rem;
}
</style>
