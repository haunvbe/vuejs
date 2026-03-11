  <script setup lang="ts">
    import { ref } from 'vue'
    import { useKanbanGlobalState } from '../composables/useKanbanGlobalState'
    import { useKanban } from '../composables/useKanban'
    import Button from '@/components/Button.vue'
    import Icon from '@/components/Icon.vue'

    const cv = ref<File[]>([])
  </script>

<template>
  <div class="kanban-candidate-form flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1010] w-full max-w-[584px] h-[calc(100dvh-128px)] rounded-[12px] bg-white shadow-sm">
    <header class="min-h-[54px] border-b border-[#0b120e24] flex justify-between items-center px-6">
      <h1 class="text-[#292a2e] font-semibold">
        Thêm ứng viên
      </h1>

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

    <main class="flex-1 px-6 py-4 overflow-y-auto">
      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Họ tên <span class="text-[#ae2e24]">*</span>
        </div>

        <VaInput
          class="w-full text-sm"
          placeholder="Nhập họ tên"
          autocomplete="off"
          clearable
          immediate-validation
          :error="true"
          error-messages="Họ tên không hợp lệ"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Email <span class="text-[#ae2e24]">*</span>
        </div>

        <VaInput
          class="w-full text-sm"
          placeholder="Nhập email"
          autocomplete="off"
          clearable
          immediate-validation
          :error="true"
          error-messages="Email không hợp lệ"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Số điện thoại <span class="text-[#ae2e24]">*</span>
        </div>

        <VaInput
          class="w-full text-sm"
          placeholder="Nhập số điện thoại"
          autocomplete="off"
          clearable
          immediate-validation
          :error="true"
          error-messages="Số điện thoại không hợp lệ"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Người phụ trách <span class="text-[#ae2e24]">*</span>
        </div>

        <VaSelect
          class="w-full text-sm"
          placeholder="Chọn người phụ trách"
          text-by="name"
          value-by="id"
          searchable
          clearable
          :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Yêu cầu tuyển dụng <span class="text-[#ae2e24]">*</span>
        </div>

        <VaSelect
          class="w-full text-sm"
          placeholder="Chọn yêu cầu tuyển dụng"
          text-by="name"
          value-by="id"
          searchable
          clearable
          :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          Nguồn ứng viên <span class="text-[#ae2e24]">*</span>
        </div>

        <VaSelect
          class="w-full text-sm"
          placeholder="Chọn nguồn ứng viên"
          text-by="name"
          value-by="id"
          :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
        />
      </div>

      <div class="mb-4">
        <div class="text-sm text-[#292a2e] font-semibold mb-1">
          CV ứng viên <span class="text-[#ae2e24]">*</span>
        </div>

        <VaFileUpload
          v-model="cv"
          dropzone
          file-types="jpg,png"
          upload-button-text="Tải tệp tin"
          drop-zone-text="Kéo thả tệp vào đây để tải lên"
        />
      </div>
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
