<template>
  <form class="user-input">
    <label class="margin" id="input-text" for="input-task">
      Add your new task to the list
    </label>
    <i-input
      type="text"
      for="input-text"
      v-model="task"
      id="input-task"
      placeholder="Enter your task"
      clearable
    />
    <button
      type="button"
      variant="success"
      value="add"
      class="simple-linear"
      @click="handleAddTask"
      :disabled="!task"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  components: {},
  name: "UserInput",
  props: {
    addTask: Function,
  },
  data: () => ({
    task: "",
  }),
  methods: {
    handleAddTask: function () {
      this.addTask(this.task);
      this.task = "";
    },
  },
};
</script>

<style scoped>
#input-text,
input {
  margin: 5px;
  color: darkslategray;
  font-size: larger;
  margin-top: 30px;
}
margin {
  margin-top: 40px;
}
button {
  width: 180px;
  margin-top: 20px;
  background: #53980d;
}
.simple-linear {
  background: linear-gradient(#53980d, darkslategray);
  height: 40px;
  color: white;
}
</style>
