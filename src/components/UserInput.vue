<template>
  <form class="user-input">
    <label id="input-text">New Task</label>
    <input type="text" for="input-text" v-model="task" />
    <input type="button" value="add" @click="handleSubmit(task)" />
  </form>
</template>

<script>
export default {
  components: {},
  name: "UserInput",
  props: {
    handleSubmit: Function,
  },
  data: () => ({
    task: "",
  }),
};
</script>

<style scoped>
#input-text,
input {
  margin: 0 5px;
}
</style>
