<template>
  <div class="todo-list">
    <i-container>
      <i-row center-xs>
        <i-column md="8">
          <div
            class="wrapper _background-gray-10 _rounded _border-color-gray-90"
          >
            <div class="heading-container">
              <img
                src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-512.png"
                lazy
              />
              <h2 class="header-text">Todo List</h2>
            </div>
            <main>
              <UserInput :addTask="addTask" />
              <List
                v-bind:list="list"
                :deleteTask="deleteTask"
                :updateTask="updateTask"
              />
            </main>
          </div>
        </i-column>
      </i-row>
    </i-container>
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
    addTask: async function (data) {
      await ToDoListApi.addTask(data);
      await this.updateList();
    },
    updateList: async function () {
      const todos = await ToDoListApi.getList();
      this.list = todos;
    },
    updateTask: async function (id, newTask) {
      await ToDoListApi.updateTask(id, newTask);
      await this.updateList();
    },
    deleteTask: async function (taskId) {
      await ToDoListApi.deleteTask(taskId);
      await this.updateList();
    },
  },
  mounted: async function () {
    const list = await ToDoListApi.getList();
    this.list = [...list];
  },
};
</script>

<style scoped>
.todo-list {
  border: 1px darkgray solid;
}

.wrapper {
  height: 95vh;
  overflow: auto;
  margin-top: 25px;
}

.header-text {
  font-size: 3rem;
  padding-left: 10px;
  font-weight: bolder;
  margin-bottom: -10px;
}
.heading-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 25px;
}
.heading-container img {
  height: 50px;
}
</style>