<script setup lang="ts">
  import Icon from '@/components/Icon.vue'
  import Button from '@/components/Button.vue'
  import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'

  const {
    application
  } = defineProps<{
    application: {
      id?: number
      name?: string
      phone?: string
      email?: string
    }
  }>()

  const {
    showTooltip,
    hideTooltip
  } = useKanbanGlobalState()

</script>

<template>
  <div class="kanban-card bg-white relative rounded-[8px] mb-2 min-h-[36px] max-h-[160px] shadow-[0_1px_1px_#1e1f2140,0_0_1px_#1e1f214f]">
    <Button
      size="w-[24px] h-[24px]"
      bg-color="transparent"
      color="text-[#505258]"
      hover="hover:bg-[#0b120e24]"
      shadow=""
      class="kanban-card__edit absolute top-1 right-1"
      @mouseenter="(e) => showTooltip(e, 'Chỉnh sửa thông tin ứng viên')"
      @mouseleave="hideTooltip"
      >
      <Icon variant="pen-to-square" width="14" height="14" />
    </Button>

    <div class="p-3">
      <div class="flex items-center justify-center">
        <div class="w-[calc(100%-32px)] space-y-[4px] cursor-pointer">
          <div class="kanban-card__title max-w-[100%] text-sm font-semibold truncate">
            {{ application?.name }}
          </div>

          <div class="kanban-card__subtitle max-w-[100%] inline-flex items-center rounded-md bg-blue-50 px-2 py-[2px] text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10">
            <div>
              <Icon variant="circle-info" width="12" height="12" />
            </div>

            <div class="ms-1 truncate">
              {{ application?.phone }}
            </div>
          </div>

          <div class="kanban-card__subtitle max-w-[100%] inline-flex items-center rounded-md bg-yellow-50 px-2 py-[2px] text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
            <div>
              <Icon variant="envelope" width="12" height="12" />
            </div>

            <div class="ms-1 truncate">
              {{ application?.email }}
            </div>
          </div>
        </div>

        <div
          class="kanban-card__avatar w-[32px] h-[32px] cursor-pointer"
          @mouseenter="(e) => showTooltip(e, `${application?.name ?? ''} - ${application?.email ?? ''}`)"
          @mouseleave="hideTooltip"
        >
          <img src="https://i.pravatar.cc/300" alt="Avatar" class="rounded-full">
        </div>
      </div>

      <!-- <div class="h-[20px] mt-1 px-1">
        <Button
          size="w-[20px] h-[20px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover=""
          shadow=""
          >
          <Icon variant="bars-sort" width="14" height="14" />
        </Button>
      </div> -->
    </div>
</div>
</template>

<style scoped>
  .kanban-card {
    border: 2px solid transparent;
  }

  .kanban-card:hover {
    border-color: #4688ec;
  }

  .kanban-card__edit {
    display: none;
  }

  .kanban-card:hover .kanban-card__edit {
    display: inline-flex;
  }

  .kanban-card__avatar {
    transition: transform 0.2s;
  }

  .kanban-card:hover .kanban-card__avatar {
    transform: translateY(10px);
  }
</style>
