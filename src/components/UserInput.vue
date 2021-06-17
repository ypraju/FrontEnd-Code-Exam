<template>
  <form class="user-input">
    <label id="input-text">New Task</label>
    <input type="text" for="input-text" v-model="task" />
    <i-button variant="success" type="button" value="add" @click="handleAddTask">Add</i-button>
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
      this.task = '';
    },
  }
};
</script>

<style scoped>
#input-text,
input {
  margin: 0 5px;
}
</style>
