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
import ListItem from "./ListItem.vue";

export default {
  components: {
    ListItem,
  },
  props: {
    list: Array,
    deleteTask: Function,
    updateTask: Function,
  },
  name: "list",
};
</script>

<style scoped>
.list {
  padding: 10px;
  margin: 10px;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 5px;
}

ul li {
  background: #dee2e6;
  padding: 10px;
  animation-delay: 1s;
  color: #212529;
}

ul li:nth-child(odd) {
  background: #868e96;
  background: linear-gradient(to right, #868e96, #ced4da);
  color: #f8f9fa;
}
</style>
