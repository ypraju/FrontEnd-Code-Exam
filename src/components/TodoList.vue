<template>
  <div class="todo-list">
    <UserInput :handleSubmit="handleSubmit" />
    <List :list="list" />
  </div>
</template>

<script>
import UserInput from "./UserInput.vue";
import List from "./List.vue";

export default {
  name: "TodoList",
  props: {},
  components: {
    UserInput,
    List,
  },
  data: () => ({
    list: [
      {
        id: 1,
        task: "buy eggs",
      },
    ],
  }),
  methods: {
    handleSubmit: (data) => {
      console.log(data);
    },
  },
  mounted: () => {
    console.log("Im mounted");
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
