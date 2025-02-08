<template>
      <div class="flex flex-col space-y-4">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          placeholder="Add a new todo"
          class="p-2 border border-gray-300 rounded"
        />
        <div v-for="(todo, index) in todos" :key="index" class="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
          <div class="flex items-center space-x-4">
            <input
              type="checkbox"
              v-model="todo.completed"
              class="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <p :class="{ 'line-through': todo.completed }" class="text-lg font-medium text-gray-900">{{ todo.text }}</p>
          </div>
          <button @click="removeTodo(index)" class="text-red-500 hover:underline">Delete</button>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          newTodo: '',
          todos: [],
        };
      },
      methods: {
        addTodo() {
          if (this.newTodo.trim() !== '') {
            this.todos.push({ text: this.newTodo, completed: false });
            this.newTodo = '';
          }
        },
        removeTodo(index) {
          this.todos.splice(index, 1);
        },
      },
    };
    </script>

    <style scoped>
    /* Add your component-specific styles here */
    </style>
