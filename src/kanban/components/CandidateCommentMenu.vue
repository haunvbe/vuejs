<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanCandidateCommentMenu } from '../composables/useCandidateCommentMenu'

  const {
    state,
    SECTIONS,
    hide,
    setSection,
    isActiveSection,
  } = useKanbanCandidateCommentMenu()

  function deleteComment() {
    setSection('Xóa bình luận', SECTIONS.DELETE_COMMENT)

    // Do something else
  }
</script>

<template>
  <div
    v-if="state.visible"
    :style="{ left: state.x + 'px', top: state.y + 'px' }"
    class="w-[304px] max-h-[400px] z-[1050] fixed bg-white rounded-[8px] shadow-overlay pb-4"
  >
    <header class="flex h-[48px] p-[4px]">
      <div class="w-[40px] h-[40px]"></div>

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

    <section v-if="isActiveSection(SECTIONS.DELETE_COMMENT)">
      <div class="w-[280px] mx-auto text-sm text-[#505258] mt-2">
        <div class="mb-4 px-2">
          Bạn có chắc chắn muốn xóa giai đoạn này không? Hành động này không thể hoàn tác và tất cả dữ liệu liên quan sẽ bị xóa vĩnh viễn.
        </div>

        <div class="flex justify-end">
          <Button
            class="w-full h-[32px]"
            bg-color="bg-[#c9372C]"
            hover="hover:bg-[#ae2e24]"
            @click="deleteComment"
          >
            <Icon variant="trash" width="14" height="14" />
            Xóa
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
