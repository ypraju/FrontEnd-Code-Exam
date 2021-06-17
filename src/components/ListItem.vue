<template>
  <div v-if="!editMode" class="list-item">
    {{ task }}
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
      >Save</i-button
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
.icons {
  margin-left: 10px;
}
.save-button {
  margin-left: 10px;
  height: 30px;
  width: 80px;
}
</style>