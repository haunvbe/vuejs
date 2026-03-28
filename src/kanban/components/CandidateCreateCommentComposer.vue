<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'
  import { useCandidateComment } from '../composables/useCandidateComment'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  const contentElement = ref<any>(null)
  const attachmentElement = ref<any>(null)
  const {
    state,
    hasAttchments
  } = useCandidateComment()

  onMounted(() => nextTick(autoResizeContent))

  function autoResizeContent() {
    const element = contentElement.value

    if (! element) {
      return
    }

    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  function uploadFile() {
    const element = attachmentElement.value

    if (! element) {
      return
    }

    element.click()
  }

  function handleFile(e: Event) {
    const filteredAttachments = Array.from(e.target?.files || [])
      .filter((file: any) =>
        ! state.value.attachments?.some((item: any) =>
          item.name === file.name && item.size === file.size
        )
      )

    state.value.attachments.push(...filteredAttachments)
  }

  function removeFile(name: string) {
    const attachments = state.value.attachments

    state.value.attachments = attachments?.filter((attachment: any) => attachment.name !== name)
  }
</script>

<template>
  <div class="w-full min-h-[48px] flex flex-col bg-[#f0f2f5] rounded-xl py-2">
    <div v-if="hasAttchments()" class="attachments px-4 mb-2">
      <div
        v-for="attachment in state.attachments"
        :key="attachment.name"
        class="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-[#505258] ring-1 ring-inset ring-gray-500/10 shadow-raised mr-2 mb-1 gap-1">
          {{ attachment.name }}

        <Button
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
        </Button>
      </div>
    </div>

    <div class="flex-1 px-4">
      <textarea
        v-model="state.content"
        ref="contentElement"
        class="w-full text-[13px] kanban-comment"
        placeholder="Viết bình luận..."
        @input="autoResizeContent"
      ></textarea>
    </div>

    <div class="w-full h-[32px] flex justify-end items-center px-4">
      <input
        ref="attachmentElement"
        @change="handleFile($event)"
        type="file"
        multiple
        hidden
      >

      <Button
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
      </Button>

      <Button
        size="w-[32px] h-[32px]"
        bg-color="bg-transparent"
        color="text-[#b0b3b8]"
        rounded="rounded-full"
        hover=""
        shadow=""
        disabled
      >
        <Icon variant="plane" width="16" height="16" />
      </Button>
    </div>
  </div>
</template>
