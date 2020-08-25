<template
  ><div class="live-data-container">
    <h2>Live Data</h2>
    <div class="live-data">
      <p>Email: {{ formData.email }}</p>
      <p>Password: {{ formData.password }}</p>
      <p class="comment">Comment: {{ formData.comment }}</p>
      <p>
        Checked :
        <span v-for="(checkItem, i) in formData.checkData" :key="i"
          >{{ i + 1 }}) {{ checkItem }}
        </span>
      </p>
      <p>Gender : {{ formData.gender }}</p>
      <p>Main skill : {{ formData.skill }}</p>
    </div>
  </div>
</template>
<script>
import { eventBus } from "@/main";
export default {
  name: "LiveDataBlock",
  props: {
    item: {
      type: Object,
      default: null,
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
    };
  },
 created() {
      eventBus.$on("fixedChange", (value) => {
        this.formData.email = value.email;
        this.formData.password = value.password;
        this.formData.comment = value.comment;
        this.formData.checkData = value.checkData;
        this.formData.gender = value.gender;
        this.formData.skill = value.skill;
      });
  },
};
</script>

<style>
.live-data-container {
  width: 50%;
  margin-top: 2.8rem;
  border: 1px solid black;
}
.live-data-container h2 {
  text-align: center;
}
.live-data {
  border: 1px solid black;
  margin: 0.5rem;
  padding: 1rem 2rem;
}
p {
  word-wrap: break-word;
}
p.comment {
  white-space: pre-line;
}
</style>
