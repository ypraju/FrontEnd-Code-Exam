<template>
  <form class="user-input">
    <div class="input-container">
      <i-input
        type="text"
        for="input-text"
        v-model="task"
        id="input-task"
        placeholder="Add a new task"
        autocomplete="off"
        size="lg"
        maxlength="80"
        data-testid="add-task-button"
      />
      <i-button
        type="button"
        variant="success"
        value="add"
        class="button"
        @click="handleAddTask"
        :disabled="!task"
        size="md"
      >
        Add
      </i-button>
    </div>
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
.button {
  color: white;
}

.button:active {
  transform: scale(1.2);
}

.input-container {
  display: inline-flex;
  gap: 10px;
}
</style>
