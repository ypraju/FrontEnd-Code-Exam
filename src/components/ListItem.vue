<template>
  <div v-if="!editMode" class="list-item">
    <span class="task-text">{{ task }}</span>
    <button class="icons" @click="handleEdit" title="edit">
      <i-icon name="edit" icon="magic" />
    </button>
    <button class="icons" @click="deleteTask(id)" title="delete">
      <i-icon name="delete" icon="times" />
    </button>
  </div>
  <div v-else>
    <input v-model="editableText" type="text" />
    <i-button
      type="button"
      value="add"
      class="save-button"
      variant="success"
      @click="handleSaveEdited"
      :disabled="!editableText"
      >Update</i-button
    >
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    id: Number,
    task: String,
    updateTask: Function,
    deleteTask: Function,
  },
  data: function () {
    return {
      editMode: false,
      editableText: "",
    };
  },
  methods: {
    handleEdit: function () {
      this.editableText = this.task;
      this.editMode = true;
    },
    handleSaveEdited: function () {
      this.updateTask(this.id, this.editableText);
      this.editableText = "";
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.list-item {
  padding: 0px;
  text-align: left;
}
.task-text {
  width: 85%;
  display: inline-block;
  font-size: 1.2rem;
}

@media (max-width: 1200px) {
  .task-text {
    width: 70%;
  }
}

.icons {
  margin-left: 10px;
}
.save-button {
  margin-left: 10px;
  height: 30px;
  width: 80px;
}
</style>