<template>
  <div class="todo-list">
    <i-container>
      <i-row center-xs>
          <i-column xs="12" xl="4">
            <i-layout>
                <i-layout-header> To Do List </i-layout-header>
                <i-layout-content>
                  <UserInput :addTask="addTask" />
                  <List
                    v-bind:list="list"
                    :deleteTask="deleteTask"
                    :updateTask="updateTask"
                  />
                </i-layout-content>
          </i-layout>
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
    updateTask: async function(id, newTask) {
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
  }
};

</script>

<style scoped>
  .todo-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>