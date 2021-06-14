<template>
  <div class="todo-list">
    <UserInput :handleSubmit="handleSubmit" />
    <List v-bind:list="list" />
  </div>
</template>

<script>
import UserInput from "./UserInput.vue";
import List from "./List.vue";
import { ToDoListApi } from "../api/to-do-list-api";

export default {
  name: "TodoList",
  props: {},
  components: {
    UserInput,
    List,
  },
  data: function () {
    return {
      list: [],
    };
  },
  methods: {
    handleSubmit: (data) => {
      console.log(data);
    },
  },
  mounted: async function () {
    const list = await ToDoListApi.getList();
    this.list = [...list];

    await ToDoListApi.addTask("add task from browser");
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
