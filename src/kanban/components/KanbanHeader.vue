<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import KanbanHeaderMenuPopover from './KanbanHeaderMenuPopover.vue'
  import { useKanbanHeaderMenuPopover } from '../composables/useKanbanHeaderMenuPopover'
  import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'
  import { useKanbanTooltip } from '../composables/useKanbanTooltip'

  const globalState = useKanbanGlobalState()
  const headerMenuPopover = useKanbanHeaderMenuPopover()
  const { showTooltip, hideTooltip } = useKanbanTooltip()
</script>

<template>
  <header class="w-full header h-[104px]">
    <div class="w-full h-[48px] bg-white flex justify-between items-center px-4 border border-b border-[#172b4d29]">
      <div class="flex items-center gap-2">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          shadow=""
          >
          <Icon width="16" height="16" variant="angle-left" />
        </Button>

        <div class="text-[#172b4d] font-bold text-sm">
          Kaopiz Recruitment
        </div>
      </div>

      <div class="flex realtive">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="me-2"
          shadow=""
          @mouseenter="showTooltip($event, 'Trang tuyển dụng')"
          @mouseleave="hideTooltip"
          >
          <Icon width="16" height="16" variant="globe" />
        </Button>

        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="me-2"
          shadow=""
          @mouseenter="showTooltip($event, 'Thông báo')"
          @mouseleave="hideTooltip"
          >
          <Icon width="16" height="16" variant="bell" />
        </Button>

        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          shadow=""
          @mouseenter="showTooltip($event, 'Tài khoản')"
          @mouseleave="hideTooltip"
          >
          <div class="w-[24px] h-[24px] rounded-full bg-red-100"></div>
        </Button>
      </div>
    </div>

    <div class="w-full h-[56px] flex items-center px-4 bg-[#f1f2f4]">
      <div class="w-full h-[32px] flex items-center justify-between relative">
        <div class="flex items-center gap-2">
          <Button
            size="w-[32px] h-[32px]"
            color="text-[#505258]"
            bg-color="transparent"
            hover=""
            shadow=""
            >
            <Icon variant="chart-kanban" width="14" height="14" />
          </Button>

          <div class="text-[#172b4d] font-bold text-sm max-w-[400px] truncate">
            Middle Software Engineer
          </div>
        </div>

        <div class="flex">
          <Button
            size="px-3.5 h-[32px]"
            color="text-[#44546f]"
            bg-color="bg-white"
            hover="hover:bg-[#091e420f]"
            class="me-2 border border-[#e5e5e5]"
          >
            <Icon variant="circle-question" width="14" height="14" />
            <span>Phỏng vấn</span>
          </Button>

          <Button
            size="px-3.5 h-[32px]"
            class="me-2"
          >
            <Icon variant="user-group" width="14" height="14" />
            <span>Ứng viên</span>
          </Button>

          <Button
            size="w-[32px] h-[32px]"
            color="text-[#505258]"
            bg-color="transparent"
            hover="hover:bg-[#0b120e24]"
            shadow=""
            @click="globalState.hideMenusAndForms(); headerMenuPopover.showMenuPopover()"
          >
            <Icon variant="ellipsis" width="14" height="14" />
          </Button>
        </div>

        <KanbanHeaderMenuPopover />
      </div>
    </div>
  </header>
</template>
