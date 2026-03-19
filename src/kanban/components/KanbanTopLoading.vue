<script setup lang="ts">
  import { useKanbanTopLoading } from '../composables/useKanbanTopLoading'

  const { loading } = useKanbanTopLoading()
</script>

<template>
  <!-- bg-[rgba(0,0,0,0.15)] -->
  <div v-if="loading.visible" id="kanbanLoading" class="fixed z-[10000] top-0 left-0 w-full h-full flex items-center justify-center bg-white">
    <div class="kanban-loading">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style>
  .kanban-loading {
    display: flex;
    gap: 3px;
    align-items: flex-start;
    height: 26px;
  }

  .kanban-loading span {
    width: 5px;
    background: #8a93a3;
    transform-origin: top;
    animation: kanban-bars 0.9s infinite ease-in-out;
  }

  .kanban-loading span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .kanban-loading span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes kanban-bars {
    0%, 100% {
      height: 6px;
    }
    50% {
      height: 26px;
    }
  }
</style>
