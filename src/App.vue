<template>
  <div id="app">
    <img alt="Vue logo" src="./views/assets/logo.png" />
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// import { defineComponent } from "vue";
import Injector from './injector';
import TodoList from '@/views/components/pages/TodoList.vue';

export default defineComponent({
  name: "App",
  components: {
    TodoList
  },
  setup() {
    new Injector().injectModules();
  }

});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
