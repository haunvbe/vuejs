<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import KanbanCandidateApplicationFormMenuPopover from './KanbanCandidateApplicationFormMenuPopover.vue'
  import { useKanbanCandidateApplicationFormMenuPopover } from '../composables/useKanbanCandidateApplicationFormMenuPopover'

  const {
    SECTIONS,
    show,
    setup,
    setSection
  } = useKanbanCandidateApplicationFormMenuPopover()

  setup()

  function addFile(e: MouseEvent) {
    show(e)
    setSection('Thêm tệp tin', SECTIONS.ADD_FILE)
  }

  function showMenuPopover(e: MouseEvent) {
    show(e)
    setSection('Hành động', undefined)
  }
</script>

<template>
  <div class="w-[80%] h-full py-2 mx-auto mb-4">
    <header class="flex">
      <Button
        size="h-[32px]"
        color="text-[#2a292e]"
        bg-color="transparent"
        hover=""
        shadow=""
      >
        <Icon variant="attachment" width="20" height="20" />

        Tệp đính kèm
      </Button>

      <div class="flex flex-1 justify-end">
        <Button
          size="px-2 h-[32px]"
          color="text-[#505258]"
          hover="hover:bg-[#0515240f]"
          class="border border-[#0b120e24]"
          bg-color=""
          @click="addFile($event)"
        >
          <Icon variant="plus" width="14" height="14" />

          Thêm
        </Button>
      </div>
    </header>

    <main class="my-6">
      <ul class="file-attachments flex flex-col gap-4">
        <li>
          <div class="flex items-center gap-3">
            <Button
              size="w-[48px] h-[48px]"
              color="text-[#505258]"
              bg-color=""
              hover="hover:bg-[#0515240f]"
              class="border border-[#0b120e24]"
            >
              <Icon variant="image" width="20" height="20" />
            </Button>

            <div class="flex-1 space-y-[2px] cursor-pointer">
              <div class="text-[#292a2e] text-sm font-medium truncate">
                Seven databases in seven weeks.png
              </div>

              <div class="text-xs text-[#505258]">
                Mar 8, 2026, 9:04 AM
              </div>
            </div>

            <div class="flex items-center justify-end">
              <Button
                size="w-[32px] h-[32px]"
                color="text-[#505258]"
                bg-color="transparent"
                hover="hover:bg-[#0b120e24]"
                class="me-2"
                shadow=""
              >
                <Icon variant="external-link" width="14" height="14" />
              </Button>

              <Button
                size="w-[32px] h-[32px]"
                color="text-[#505258]"
                bg-color="bg-[#0515240f]"
                hover="hover:bg-[#0b120e24]"
                @click="showMenuPopover($event)"
                >
                <Icon variant="ellipsis" width="14" height="14" />
              </Button>
            </div>
          </div>
        </li>

        <li>
          <div class="flex items-center gap-3">
            <Button
              size="w-[48px] h-[48px]"
              color="text-[#505258]"
              bg-color=""
              hover="hover:bg-[#0515240f]"
              class="border border-[#0b120e24]"
            >
              <Icon variant="file" width="20" height="20" />
            </Button>

            <div class="flex-1 space-y-[2px] cursor-pointer">
              <div class="text-[#292a2e] text-sm font-medium truncate">
                Seven databases in seven weeks.pdf
              </div>

              <div class="text-xs text-[#505258]">
                Mar 8, 2026, 9:04 AM
              </div>
            </div>

            <div class="flex items-center justify-end">
              <Button
                size="w-[32px] h-[32px]"
                color="text-[#505258]"
                bg-color="transparent"
                hover="hover:bg-[#0b120e24]"
                class="me-2"
                shadow=""
              >
                <Icon variant="external-link" width="14" height="14" />
              </Button>

              <Button
                size="w-[32px] h-[32px]"
                color="text-[#505258]"
                bg-color="bg-[#0515240f]"
                hover="hover:bg-[#0b120e24]"
                @click="showMenuPopover($event)"
                >
                <Icon variant="ellipsis" width="14" height="14" />
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </main>

    <div class="w-full h-[40px] flex justify-center">
      <Button
        size="w-1/2 h-[32px]"
        color="text-[#292a2e]"
        bg-color="bg-[#0515240f]"
        hover="hover:bg-[#0b120e24]"
        shadow=""
        font-weight="font-medium"
        >
        Xem thêm
      </Button>
    </div>
    
    <KanbanCandidateApplicationFormMenuPopover />
  </div>
</template>
