<script setup lang="ts">
  import { onMounted } from 'vue'
  import Icon from '@/components/Icon.vue'
  import Button from '@/components/Button.vue'
  import Sortable from 'sortablejs'
  import KanbanCard from './KanbanCard.vue'

  const {
    stage
  } = defineProps<{
    stage: {
      id?: number
      name?: string
      data?: Record<string, any>[]
    }
  }>()

  onMounted(() => {
    const el = document.getElementById(`stage${stage.id}`)

    new Sortable(el, {
      animation: 50,
      group: 'shared',
      draggable: '.kanban-card',
      forceFallback: true,
      fallbackClass: 'kanban-drag-shadow',
      chosenClass: 'kanban-chosen'
    })
  })
</script>

<template>
  <div class="kanban-column w-[284px] shrink-0 h-fit max-h-[calc(100vh-152px)] flex flex-col px-1 py-2 bg-[#f5f5f5] shadow-sm rounded-[12px] border border-[#e5e5e5]">
    <div class="h-[40px] px-3">
      <div class="h-[32px] flex items-center">
        <div class="w-[calc(100%-32px)] text-sm font-semibold text-[#292a2e]">
          {{ stage?.name }}
        </div>

        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#00000029]"
          shadow=""
        >
          <Icon variant="ellipsis" width="14" height="14" />
        </Button>
      </div>
    </div>

    <div :id="`stage${stage.id}`" class="kanban-scroll flex-1 min-h-0">
      <KanbanCard v-for="application in stage.data" :key="application?.id" :application />
    </div>

    <div v-if="stage?.name === 'Ứng tuyển'" class="h-[40px] px-3 py-[4px]">
      <Button class="w-full h-[32px]">
        <Icon variant="plus" width="14" height="14" />
        Thêm ứng viên
      </Button>
    </div>
  </div>
</template>

<style scoped>
  .kanban-scroll {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 4px 6px 4px 4px;
    min-height: 36px;
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

  @supports (scrollbar-width: thin) {
    .kanban-scroll {
      scrollbar-width: thin;
      scrollbar-color: #c5c8c9 #e3e5e8;
    }
  }

  @supports selector(::-webkit-scrollbar) {
    .kanban-scroll::-webkit-scrollbar {
      width: 6px;
      background: #e3e5e8;
    }

    .kanban-scroll::-webkit-scrollbar-track {
      background: #e3e5e8;
    }

    .kanban-scroll::-webkit-scrollbar-thumb {
      background: #c5c8c9;
      border-radius: 12px;
    }

    .kanban-scroll:hover::-webkit-scrollbar-thumb {
      background: #9ea3a6;
    }
  }
</style>

