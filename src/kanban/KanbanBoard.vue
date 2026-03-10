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
  <KanbanOverlay />
  <KanbanCandidateForm />

  <div class="h-screen flex flex-col bg-[#e9f2fee6] px-2">
    <header class="w-full header h-[104px]"></header>

    <main class="w-full flex-1 overflow-x-auto">
      <div id="kanbanBoard" class="flex h-full gap-2">
        <KanbanColumn v-for="stage in stages" :key="stage.id" :stage="stage" />
      </div>
    </main>
  </div>
</template>

<style scoped>
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
