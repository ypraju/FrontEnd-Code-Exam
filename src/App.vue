<template>
  <div id="app" class="_background-envato">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
