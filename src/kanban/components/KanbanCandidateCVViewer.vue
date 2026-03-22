<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanCandidateCVViewer } from '../composables/useKanbanCandidateCVViewer'

  const { state, hide } = useKanbanCandidateCVViewer()
</script>

<template>
  <div
    v-if="state.visible"
    class="fixed top-0 left-0 w-full h-full flex flex-col z-[10000] bg-white"
  >
    <header class="w-full h-[48px] flex items-center px-4">
      <div class="flex-1"></div>

      <Button
        size="w-[32px] h-[32px]"
        color="text-[#505258]"
        hover="hover:bg-[#0515240f]"
        class="border border-[#0b120e24]"
        bg-color=""
        @click="hide()"
      >
        <Icon variant="close" width="14" height="14" />
      </Button>
    </header>

    <main class="w-full flex-1">
      <div class="w-[60%] h-full py-2 mx-auto">
        <iframe
          src="/upload/Seven databases in seven weeks.pdf"
          width="100%"
          height="100%">
        </iframe>
      </div>
    </main>

    <footer class="w-full h-[124px] flex items-center px-4">
      <div class="w-[88px] h-[88px]"></div>

      <div class="flex flex-col flex-1 items-center justify-center h-full space-y-4">
        <div class="space-y-[2px]">
          <div class="text-[#292a2e] text-[18px] font-medium truncate">
            Seven databases in seven weeks.pdf
          </div>

          <div class="text-sm text-center text-[#505258]">
            Mar 8, 2026, 9:04 AM
          </div>
        </div>

        <div class="flex gap-4">
          <Button
            size="px-2 h-[32px]"
            color="text-[#505258]"
            hover="hover:bg-[#0515240f]"
            class="border border-[#0b120e24]"
            bg-color=""
          >
            <Icon variant="external-link" width="14" height="14" />

            Mở trong tab mới
          </Button>

          <Button
            size="px-2 h-[32px]"
            color="text-[#505258]"
            hover="hover:bg-[#0515240f]"
            class="border border-[#0b120e24]"
            bg-color=""
          >
            <Icon variant="download" width="14" height="14" />

            Tải tệp tin
          </Button>

          <Button
            size="px-2 h-[32px]"
            color="text-[#505258]"
            hover="hover:bg-[#0515240f]"
            class="border border-[#0b120e24]"
            bg-color=""
          >
            <Icon variant="trash" width="14" height="14" />

            Xóa tệp tin
          </Button>
        </div>
      </div>

      <div class="w-[88px] h-[88px]"></div>
    </footer>
  </div>
</template>
