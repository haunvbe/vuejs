<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'
  import { useCandidateComment } from '../composables/useCandidateComment'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  const { state } = useCandidateComment()
  const comment = ref<any>({ ...state.value.editingComment })
  const contentElement = ref<any>(null)
  const attachmentElement = ref<any>(null)

  onMounted(() => nextTick(autoResizeContent))

  function autoResizeContent() {
    const element = contentElement.value

    if (! element) {
      return
    }

    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  function save() {
    state.value.isEdit = false
  }

  function cancel() {
    state.value.isEdit = false
  }
</script>

<template>
  <div>
    <div class="attachments mb-2">
      <div
        v-for="attachment in comment.attachments"
        :key="attachment?.name"
        class="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-[#1868db] hover:underline ring-1 ring-inset ring-gray-500/10 shadow-raised mr-2 mb-1 gap-1 cursor-pointer">
          {{ attachment.name }}

        <!-- <Button
          size="w-[16px] h-[16px]"
          bg-color="bg-transparent"
          color="text-[#505258]"
          rounded="rounded-full"
          hover="hover:bg-[#0b120e24]"
          class="relative"
          shadow=""
          @click="removeFile(attachment.name)"
        >
          <Icon variant="close" width="10" height="10" />
        </Button> -->
      </div>
    </div>

    <div class="flex-1">
      <textarea
        v-model="comment.content"
        ref="contentElement"
        class="w-full text-[13px] kanban-comment"
        placeholder="Viết bình luận..."
        @input="autoResizeContent"
      ></textarea>
    </div>

    <div class="w-full h-[32px] flex justify-end items-center gap-2">
      <input
        ref="attachmentElement"
        @change="handleFile($event)"
        type="file"
        multiple
        hidden
      >

      <!-- <Button
        @click="uploadFile"
        size="w-[32px] h-[32px]"
        bg-color="bg-transparent"
        color="text-[#505258]"
        rounded="rounded-full"
        hover="hover:bg-[#0b120e24]"
        class="relative"
        shadow=""
      >
        <Icon variant="attachment" width="16" height="16" />
      </Button> -->

      <Button
        @click="cancel"
        size="px-4 h-[28px]"
        color="text-[#505258]"
        hover="hover:bg-[#0b120e24]"
        class="ms-2"
        bg-color=""
        shadow=""
      >
        Hủy
      </Button>

      <Button
        @click="save"
        size="px-4 h-[28px]"
      >
        Lưu
      </Button>
    </div>
  </div>
</template>
