<template>
  <div>
    <input type="text" v-model="item" @input="fixedChange(currentIndex)" />
    <button v-if="isNewElem" v-show="arr.length <= 10" @click="addItem">
      Add Item
    </button>

    <button v-else @click="saveChange(currentIndex)">Save</button>
    <p>{{ item }}</p>
    <ul>
      <li v-for="(arrItem, i) in arr" :key="i">
        <h5>{{ arrItem }}</h5>
        <button @click="remove(i)">Remove</button>
        <button @click="edit(arrItem, i)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: [],
      item: "",
      isNewElem: true,
      currentIndex: null,
    };
  },
  methods: {
    addItem() {
      this.arr.push(this.item);
      this.item = "";
    },

    remove(i) {
      this.arr.splice(i, 1);
    },
    edit(value, i) {
      this.currentIndex = i;
      this.isNewElem = false;
      this.item = value;
    },
    saveChange(i) {
      this.isNewElem = true;
      this.arr.splice(i, 1, this.item);
    },
    fixedChange(i) {
      if (!this.isNewElem) this.arr.splice(i, 1, this.item);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
}
</style>
