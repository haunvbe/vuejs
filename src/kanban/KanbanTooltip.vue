<script setup lang="ts">
  import { useKanbanTooltip } from './composables/useKanbanTooltip'

  const { tooltipState } = useKanbanTooltip()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="tooltipState.visible"
      class="kanban-tooltip"
      :style="{
        left: tooltipState.x + 'px',
        top: tooltipState.y + 'px'
      }"
    >
      {{ tooltipState.text }}
    </div>
  </Teleport>
</template>

<style scoped>
  .kanban-tooltip {
    padding: 4px 10px;
    position: fixed;
    border-radius: 6px;
    background-color: #202020;
    box-shadow: 0 1px 1px 0 #20212447;
    color: #ffffff;
    left: 50%;
    top: 100%;
    font-size: 12px;
    font-weight: 500;
    display: block;
    pointer-events: none;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    z-index: 1000;
  }

  .kanban-tooltip::after {
    content: "";
    position: fixed;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #202020 transparent;
  }
</style>
