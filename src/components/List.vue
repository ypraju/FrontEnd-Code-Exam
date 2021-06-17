<template>
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.id">
        <list-item
          :id="item.id"
          :task="item.task"
          :updateTask="updateTask"
          :deleteTask="deleteTask"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem
  },
  props: {
    list: Array,
    deleteTask: Function,
    updateTask: Function
  },
  name: "list",
};
</script>

<style scoped>
.list {
  padding: 10px;
  margin: 10px;
}
</style>
