  <script setup lang="ts">
    import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'
    import { useKanban } from '../composables/useKanban'
    import Button from '@/components/Button.vue'
    import Icon from '@/components/Icon.vue'
  </script>

<template>
  <div class="kanban-candidate-form flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1010] w-full max-w-[584px] h-[calc(100dvh-128px)] rounded-[12px] bg-white shadow-sm">
    <header class="min-h-[56px] border-b border-[#0b120e24] flex justify-between items-center px-6 py-4">
      <div>
        <Button
          size="px-[6px] py-[4px]"
          bg-color="bg-[#dddee1]"
          color="text-[#505258]"
          hover=""
          shadow=""
          >
          <Icon width="12" height="12" variant="plus" />
          Thêm ứng viên
        </Button>
      </div>

      <div>
        <Button
          size="w-[32px] h-[32px]"
          bg-color="transparent"
          color="text-[#505258]"
          hover="hover:bg-[#0b120e24]"
          shadow=""
          >
          <Icon width="20" height="20" variant="close" />
        </Button>
      </div>
    </header>

    <main class="flex-1 px-6">
      <VaInput
        class="mt-4 text-sm"
        label="Họ và tên"
        placeholder="Placeholder"
        autocomplete="off"
      />
    </main>

    <footer class="min-h-[56px] flex justify-end items-center border-t border-[#0b120e24] px-6">
      <Button
        bg-color="bg-[#dddee1]"
        color="text-[#505258]"
        hover="hover:bg-[#00000052]"
        class="w-fit h-[32px] me-2"
      >
        Hủy
      </Button>

      <Button class="w-fit h-[32px]">
        <Icon variant="archive" width="14" height="14" />
        Lưu
      </Button>
    </footer>
  </div>
</template>


<style scoped>
</style>
