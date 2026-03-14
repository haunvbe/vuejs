<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  const isAddingStage = ref<boolean>(false)

  function addStage() {
    isAddingStage.value = true
  }

  function cancelAddStage() {
    isAddingStage.value = false
  }
</script>

<template>
  <div class="kanban-column w-[272px] shrink-0 h-fit flex flex-col shadow-sm rounded-[12px] border border-[#e5e5e5]">
    <Button
      v-if="!isAddingStage"
      size="w-full px-4 h-[40px]"
      color="text-[#292a2e]"
      bg-color="transparent"
      hover="hover:bg-[#f1f2f4]"
      rounded="rounded-[12px]"
      align="items-center"
      shadow=""
      @click="addStage"
    >
      <Icon variant="plus" width="14" height="14" />
      Thêm giai đoạn
    </Button>

    <section v-else>
      <div class="text-sm text-[#505258] p-2 my-2">
        <div class="mb-4">
          <div class="font-semibold mb-1">
            Tên giai đoạn <span class="text-[#ae2e24]">*</span>
          </div>

          <VaInput
            class="w-full text-sm"
            placeholder="Nhập tên giai đoạn"
            autocomplete="off"
            clearable
            immediate-validation
          />
        </div>

        <div class="mb-4">
          <div class="font-semibold mb-1">
            Chọn mẫu email <span class="text-[#ae2e24]">*</span>
          </div>

          <VaSelect
            class="w-full text-sm"
            placeholder="Chọn mẫu email"
            text-by="name"
            value-by="id"
            :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
          />
        </div>

        <div class="flex justify-end">
          <Button
            bg-color="bg-[#0515240f]"
            color="text-[#505258]"
            hover="hover:bg-[#0b120e24]"
            class="w-fit h-[32px] me-2"
            @click="cancelAddStage"
          >
            Hủy
          </Button>

          <Button class="w-fit h-[32px]">
            <Icon variant="archive" width="14" height="14" />
            Lưu
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
