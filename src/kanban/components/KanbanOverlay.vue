<script setup lang="ts">
  import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'

  const { overlay, hideOverlay } = useKanbanGlobalState()
</script>

<template>
  <div v-if="overlay.visible" class="kanban-overlay" @click="hideOverlay"></div>
</template>

<style scoped>
.kanban-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>
