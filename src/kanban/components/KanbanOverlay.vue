<script setup lang="ts">
  import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'

  const { overlay, hideOverlay } = useKanbanGlobalState()
</script>

<template>
  <div
    v-if="overlay.visible"
    @click="hideOverlay"
    class="kanban-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-[1000] bg-[rgba(0,0,0,0.15)]">
  </div>
</template>
