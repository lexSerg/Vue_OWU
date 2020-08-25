<template>
  <div class="container">
    <h2>Fill out the form below</h2>
    <form @input="fixedChange">
      <div class="form-group">
        <label>Email address</label>
        <input v-model="formData.email" type="email" class="form-control" />
        <small class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          v-model="formData.password"
          type="password"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label>Enter your comment</label>
        <textarea
          v-model="formData.comment"
          class="form-control"
          rows="3"
        ></textarea>
      </div>

      <div class="form-group form-check">
        <div class="check1-wrap">
          <input
            v-model="formData.checkData"
            type="checkbox"
            class="form-check-input"
            id="Check1"
            value="Send mail"
          />
          <label class="form-check-label" for="Check1">Send mail</label>
        </div>
        <div check2-wrap>
          <input
            v-model="formData.checkData"
            type="checkbox"
            class="form-check-input"
            id="Check2"
            value="Send Info"
          />
          <label class="form-check-label" for="Check2">Send Info</label>
        </div>
      </div>

      <div class="form-check">
        <div class="radio1-wrap">
          <input
            class="form-check-input"
            type="radio"
            name="gender-radio"
            value="Male"
            v-model="formData.gender"
          />
          <label class="form-check-label" for="exampleRadios1">Male</label>
        </div>

        <div class="radio2-wrap">
          <input
            class="form-check-input"
            type="radio"
            name="gender-radio"
            value="Female"
            v-model="formData.gender"
          />
          <label class="form-check-label" for="exampleRadios2">Female</label>
        </div>
      </div>

      <div class="form-group form-select">
        <label>Сhoose your main skill</label>
        <select v-model="formData.skill" class="form-control">
          <option selected hidden>{{ formData.skill }}</option>
          <option v-for="(skill, i) in skills" :key="i">{{ skill }}</option>
        </select>
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        v-if="isNewItem"
        v-show="todoArr.length <= 10"
        @click.prevent="createItem"
      >
        Add New Item
      </button>

      <button type="submit" v-else @click="saveItem" class="btn btn-primary">
        Save Item
      </button>
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "Form",
  props: {
    todoArr: {
      type: Array,
      default: null,
    },
    isNewItem: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
        comment: "",
        checkData: [],
        gender: NaN,
        skill: "Skill",
      },
      skills: ["Vue", "Angular", "React", "JQuery"],
    };
  },
  methods: {
    createItem() {
      this.$emit("createItem", this.formData);
    },
    saveItem() {
      this.$emit("saveItem", this.formData);
    },
    fixedChange() {
      eventBus.$emit("fixedChange", this.formData);
    },
  },
};
</script>

<style>
form {
  border: 1px solid black;
  padding: 1rem;
}
input[type="checkbox"] {
  position: inherit;
  margin-right: 0.5rem;
}
.form-check {
  padding-left: 0;
  display: flex;
  justify-items: flex-start;
}
.check1-wrap {
  margin-right: 0.5rem;
}
.form-check-input {
  position: static;
  margin-left: 0;
  margin-right: 0.5rem;
}
.radio1-wrap {
  margin-right: 2.7rem;
}
.form-select {
  margin-top: 1rem;
}
.btn {
  margin-top: 1rem;
}
</style>
