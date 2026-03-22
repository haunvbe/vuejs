<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanBadgeListPopover } from '../composables/useKanbanBadgeListPopover'

  const { state, hide } = useKanbanBadgeListPopover()
</script>

<template>
  <div
    v-if="state.visible"
    class="kanban-badge-list-popover transition-colors pb-4"
    :class="{ 'kanban-badge-list-popover--show': state.visible }"
    :style="{ left: state.x + 'px', top: state.y + 'px' }"
  >
    <header class="flex h-[48px] p-[4px]">
      <div class="w-[40px] h-[40px]">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="m-[4px]"
          shadow=""
          >
          <Icon width="16" height="16" variant="angle-left" />
        </Button>
      </div>

      <div class="flex-1 h-[40px] leading-[40px] text-center text-[#505258] font-semibold text-sm truncate">
        Người phụ trách
      </div>

      <div class="w-[40px] h-[40px]">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="m-[4px]"
          shadow=""
          >
          <Icon width="14" height="14" variant="close" />
        </Button>
      </div>
    </header>

    <div class="my-1">
      <span
        v-for="item in state.data"
        :key="item[state.fieldMap?.id]"
        :class="`mr-2 inline-flex items-center rounded-md bg-${state.badgeType}-50 px-2 py-1 text-xs font-medium text-${state.badgeType}-600 ring-1 ring-inset ring-${state.badgeType}-500/10`">
        {{ item[state.fieldMap?.name] }}
      </span>
    </div>
  </div>
</template>

<style scoped>
  .kanban-badge-list-popover {
    width: 304px;
    position: absolute;
    border-radius: 8px;
    padding: 8px 12px;
    transform: translate(-50%, 8px) scale(0.96);
    box-shadow: 0 0 0 1px #d1d9e080, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f;
    /* left: 50%; */
    /* top: 100%; */
    font-size: 14px;
    font-weight: 600;
    /* opacity: 0; */
    /* pointer-events: none; */
    transform: translateX(-50%);
    transition: all 0.2s ease;
    z-index: 1050;
  }

  .kanban-badge-list-popover--show {
    opacity: 1;
    transform: translate(-50%, 0px) scale(1);
  }

  .kanban-badge-list-popover::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(0,0,0,0.08) transparent;
  }

  .kanban-badge-list-popover::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
</style>
