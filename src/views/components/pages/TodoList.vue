<template lang="pug">
.list
  .list-item(v-for="v in state.values") {{v}}
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue';
import { Keys } from '@/injector';

export default defineComponent({
  name: 'todo-list',
  components: {
  },
  setup() {
    const state = inject(Keys.TodoStateKey);
    const usecase = inject(Keys.TodoUsecaseKey)!!;
    onMounted(() => {usecase.get()});
    return { 
      state,
    }
  }
});
</script>

<style lang="scss">

</style>
