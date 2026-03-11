<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useKanban } from './composables/useKanban'
  import Sortable from 'sortablejs'
  import KanbanColumn from './components/KanbanColumn.vue'
  import KanbanOverlay from './components/KanbanOverlay.vue'
  import KanbanCandidateForm from './components/KanbanCandidateForm.vue'

  const {
    stages
  } = useKanban()

  onMounted(() => {
    const el = document.getElementById('kanbanBoard')

    new Sortable(el, {
      animation: 50,
      draggable: '.kanban-column',
      forceFallback: true,
      fallbackClass: 'kanban-drag-shadow',
      chosenClass: 'kanban-chosen',
    })
  })

</script>

<template>
  <div id="kanban" class="kanban h-screen flex flex-col bg-[#e9f2fee6] px-2">
    <KanbanOverlay />
    <KanbanCandidateForm />

    <header class="w-full header h-[104px]"></header>

    <main class="w-full flex-1 overflow-x-auto">
      <div id="kanbanBoard" class="kanban-board flex h-full gap-2">
        <KanbanColumn v-for="stage in stages" :key="stage.id" :stage="stage" />
      </div>
    </main>
  </div>
</template>

<style>
  .va-dropdown__content {
    border-radius: 8px;
    font-size: 14px;
    z-index: 10000 !important;
  }

  .kanban input::placeholder {
    color: #8c8f97;
    font-weight: 600;
    font-size: 13px;
  }

  .kanban .va-input-wrapper__field {
    border-radius: 6px;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .kanban .va-file-upload__field button {
    --va-background-color: #1868db !important;
    width: fit-content;
    height: 32px;
    padding: 0;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-duration: 150ms;
  }

  .kanban .va-file-upload__field__text,
  .kanban .va-file-upload-list-item__content {
    color: #8c8f97;
    font-size: 14px;
    font-weight: 600;
  }

  .kanban .va-file-upload__field button .va-button__content {
    font-size: 14px;
    font-weight: 600;
  }

  .kanban-drag-shadow {
    transform: rotate(8deg);
    cursor: grabbing;
    opacity: 0.8;
  }

  .kanban-chosen {
    position: relative;
  }

  .kanban-chosen::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.16);
    z-index: 100;
    border-radius: inherit;
  }
</style>
