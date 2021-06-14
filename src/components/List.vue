<template>
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    list: Array,
  },
  name: "list",
};
</script>

<style scoped>
</style>
