<template>
  <div v-if="!editMode" class="list-item">
    <span class="task-text">{{ task }}</span>
    <div class="task-action">
      <button class="icons" @click="handleEdit" title="edit">
        <font-awesome-icon icon="edit" class="edit-icon" size="lg" />
      </button>
      <button class="icons" @click="deleteTask(id)" title="delete">
        <font-awesome-icon icon="trash" class="trash-icon" size="lg" />
      </button>
    </div>
  </div>
  <div v-else class="list-item-edit">
    <input v-model="editableText" type="text" class="edit-text" />
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
  display: flex;
}
.task-text {
  flex: 1;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
}
.task-action {
  display: flex;
  gap: 5px;
  margin: -10px;
}

@media (max-width: 1200px) {
  .task-text {
    width: 70%;
  }
}

.icons {
  background: #e9ecef;
  border: none;
  padding: 0 10px;
}

.trash-icon {
  color: #f25f5c;
}

.edit-icon {
  color: #5d65b9;
}

.save-button {
  margin-left: 10px;
  height: 30px;
  width: 80px;
}
.edit-text {
  font-size: 1.2rem;
  font-weight: 500;
}
.list-item-edit {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>