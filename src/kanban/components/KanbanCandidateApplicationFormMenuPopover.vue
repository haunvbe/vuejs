<script setup lang="ts">
  import { ref } from 'vue'
  import { useKanbanCandidateApplicationFormMenuPopover } from '../composables/useKanbanCandidateApplicationFormMenuPopover'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  const files = ref<any>()

  const {
    state,
    SECTIONS,
    hide,
    setSection,
    isActiveSection,
    hasActiveSection,
    withoutActiveSection
  } = useKanbanCandidateApplicationFormMenuPopover()

  function deleteFile() {
    setSection('Xóa tệp tin', SECTIONS.DELETE_FILE)

    // Do something else
  }

  function downloadFile() {
    // setSection('Tải tệp tin', SECTIONS.DOWNLOAD_FILE)

    // Do something else
  }
</script>

<template>
  <div
    v-if="state.visible"
    :style="{ left: state.x + 'px', top: state.y + 'px' }"
    class="w-[304px] max-h-[400px] z-[1050] absolute bg-white rounded-[8px] shadow-overlay pb-4"
  >
    <header class="flex h-[48px] p-[4px]">
      <div class="w-[40px] h-[40px]">
        <Button
          v-if="hasActiveSection() && ! isActiveSection(SECTIONS.ADD_FILE)"
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="m-[4px]"
          shadow=""
          @click="setSection('Hành động', undefined)"
          >
          <Icon width="16" height="16" variant="angle-left" />
        </Button>
      </div>

      <div class="flex-1 h-[40px] leading-[40px] text-center text-[#505258] font-semibold text-sm truncate">
        {{ state.sectionLabel }}
      </div>

      <div class="w-[40px] h-[40px]">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="m-[4px]"
          shadow=""
          @click="hide"
          >
          <Icon width="14" height="14" variant="close" />
        </Button>
      </div>
    </header>

    <section v-if="withoutActiveSection()">
      <ul>
          <li>
          <Button
            size="w-full h-[32px]"
            color="text-[#292a2e]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            font-weight=""
            class="px-4"
            shadow=""
            rounded=""
            @click="downloadFile"
          >
            Tải tệp tin
          </Button>
        </li>

        <li>
          <Button
            size="w-full h-[32px]"
            color="text-[#ae2e24]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            font-weight=""
            class="px-4"
            shadow=""
            rounded=""
            @click="deleteFile"
          >
            Xóa tệp tin
          </Button>
        </li>
      </ul>
    </section>

    <section v-else-if="isActiveSection(SECTIONS.ADD_FILE)">
      <div class="w-[280px] mx-auto text-sm text-[#505258] mt-4">
        <div class="mb-4">
          <VaFileUpload
            v-model="files"
            dropzone
          >
            <div class="flex flex-col items-center justify-center my-6">
              <div class="text-sm text-[#505258] font-medium mb-4">
                Kéo thả tệp vào đây để tải lên
              </div>

              <Button
                size="px-2 h-[32px]"
                bg-color="bg-transparent"
                color="text-[#505258]"
                class="border border-[#0b120e24]"
              >
                <Icon variant="attachment" width="16" height="16" />

                Tải tệp tin
              </Button>
            </div>
          </VaFileUpload>
        </div>

        <div class="flex justify-end">
          <Button class="w-fit h-[32px]">
            <Icon variant="archive" width="14" height="14" />
            Lưu
          </Button>
        </div>
      </div>
    </section>

    <section v-else-if="isActiveSection(SECTIONS.DELETE_FILE)">
      <div class="w-[280px] mx-auto text-sm text-[#505258] mt-2">
        <div class="mb-4 px-2">
          Bạn có chắc chắn muốn xóa giai đoạn này không? Hành động này không thể hoàn tác và tất cả dữ liệu liên quan sẽ bị xóa vĩnh viễn.
        </div>

        <div class="flex justify-end">
          <Button
            class="w-fit h-[32px]"
            bg-color="bg-[#c9372C]"
            hover="hover:bg-[#ae2e24]"
          >
            <Icon variant="trash" width="14" height="14" />
            Xóa
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
