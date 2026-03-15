<script setup lang="ts">
  import { ref } from 'vue'
  import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  const isAddingStage = ref<boolean>(false)
  const globalState = useKanbanGlobalState()

  function addStage() {
    globalState.hideMenusAndForms()

    isAddingStage.value = true
  }

  function cancelAddStage() {
    isAddingStage.value = false
  }
</script>

<template>
  <div
    :class="!isAddingStage ? '' : 'shadow-raised'"
    class="kanban-column w-[272px] shrink-0 h-fit flex flex-col bg-[#f1f2f4] rounded-[12px]">
    <Button
      v-if="!isAddingStage"
      size="w-full px-4 h-[40px]"
      color="text-[#505258]"
      bg-color="bg-[#0b120e24]"
      hover="hover:bg-[#00000029]"
      rounded="rounded-[12px]"
      align="items-center"
      shadow=""
      @click="addStage"
    >
      <Icon variant="plus" width="14" height="14" />
      Thêm giai đoạn
    </Button>

    <section v-else>
      <div class="text-sm text-[#505258] p-2">
        <div class="mb-2">
          <VaInput
            class="w-full text-sm bg-white"
            placeholder="Nhập tên giai đoạn"
            autocomplete="off"
            clearable
            autofocus
            immediate-validation
          />
        </div>

        <div class="flex">
          <Button class="w-fit h-[32px]">
            <Icon variant="archive" width="14" height="14" />
            Lưu
          </Button>

          <Button
            size="w-[32px] h-[32px]"
            color="text-[#505258]"
            hover="hover:bg-[#0b120e24]"
            class="ms-2"
            bg-color=""
            shadow=""
            @click="cancelAddStage"
          >
            <Icon variant="close" width="14" height="14" />
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
