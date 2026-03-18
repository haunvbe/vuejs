<script setup lang="ts">
  import { useKanbanLoading } from '../composables/useKanbanLoading'

  const { loading } = useKanbanLoading()
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
  /* .kanban-loading {
    display: flex;
    gap: 3px;
    height: 24px;
  }

  .kanban-loading span {
    width: 4px;
    height: 100%;
    background: #8a93a3;
    animation: kanban-bars 0.8s infinite ease-in-out;
  }

  .kanban-loading span:nth-child(2) {
    animation-delay: 0.1s;
  }

  .kanban-loading span:nth-child(3) {
    animation-delay: 0.2s;
  }

  @keyframes kanban-bars {
    0%,100% {
      transform: scaleY(0.4);
    }
    50% {
      transform: scaleY(1);
    }
  } */

  .kanban-loading {
    display: flex;
    gap: 3px;
    align-items: flex-start; /* top-down */
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
