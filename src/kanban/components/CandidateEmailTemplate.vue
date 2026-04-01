<script setup lang="ts">
  import { useCandidateInterviewTemplateForm } from '../composables/useCandidateInterviewTemplateForm'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'

  function pad2(n: number) {
    return String(n).padStart(2, '0')
  }

  function formatDmY(d: Date) {
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`
  }

  const {
    interviewTemplateForm,
    formState,
    isLocationRequired,
    locationOptions,
    participantOptions,
    sendEmailSelectOptions,
    hideInterviewTemplateForm,
    setDurationDigits,
    saveInterviewTemplate,
  } = useCandidateInterviewTemplateForm()
</script>

<template>
  <div
    v-if="interviewTemplateForm.visible"
    class="kanban-candidate-email-template fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000] bg-[rgba(0,0,0,0.15)]"
  >
    <div class="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1010] w-full max-w-[768px] h-[calc(100dvh-128px)] rounded-[12px] bg-white shadow-sm">
      <header class="min-h-[54px] border-b border-[#0b120e24] flex justify-between items-center px-6">
        <h1 class="text-[#292a2e] font-semibold">
          Thêm phỏng vấn mới
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

      <main class="flex-1 px-8 py-4 overflow-y-auto">
        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Loại phỏng vấn <span class="text-[#ae2e24]">*</span>
          </div>

          <VaSelect
            class="w-full text-sm"
            content-class="kanban-select"
            placeholder="Chọn loại phỏng vấn"
            text-by="name"
            value-by="id"
            searchable
            clearable
            :options="[{ id: 1, name: 'Phỏng vấn tại văn phòng' }, { id: 2, name: 'Phỏng vấn online' }]"
          />
        </div>

        <div class="mb-4">
          <div class="flex gap-8 justify-between">
            <div class="w-1/2">
              <div class="text-sm text-[#292a2e] font-semibold mb-1">
                Thời gian phỏng vấn <span class="text-[#ae2e24]">*</span>
              </div>

              <div class="flex flex-wrap gap-2 items-start">
                <VaDateInput
                  class="flex-1 min-w-0 text-sm"
                  content-class="kanban-date"
                  manual-input
                  icon=""
                  placeholder="Chọn ngày phỏng vấn"
                >
                  <template #appendInner>
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="planner" width="16" height="16" />
                    </Button>
                  </template>
                </VaDateInput>

                <VaTimeInput
                  class="w-[120px] text-sm"
                  content-class="kanban-date"
                  icon=""
                  placeholder="Thời gian"
                >
                  <template #appendInner>
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="clock" width="16" height="16" />
                    </Button>
                  </template>
                </VaTimeInput>
              </div>
            </div>

            <div class="w-1/2">
              <div class="text-sm text-[#292a2e] font-semibold mb-1">
                Dự kiến kéo dài (m)
              </div>

              <VaInput
                class="w-full text-sm"
                placeholder="Nhập thời gian dự kiến kéo dài"
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Địa điểm phỏng vấn <span class="text-[#ae2e24]">*</span>
          </div>

          <VaSelect
            class="w-full text-sm"
            content-class="kanban-select"
            placeholder="Chọn loại phỏng vấn"
            text-by="name"
            value-by="id"
            searchable
            clearable
            :options="[{ id: 1, name: 'Hà Nội' }, { id: 2, name: 'Đà Nẵng' }]"
          />
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Người tham gia phỏng vấn <span class="text-[#ae2e24]">*</span>
          </div>

          <VaSelect
            v-model="formState.participants"
            class="w-full text-sm kanban-badge--blue"
            content-class="kanban-select"
            placeholder="Chọn người tham gia"
            text-by="name"
            value-by="id"
            multiple
            dropdown-icon=""
            :max-visible-options="2"
            :options="[{ id: 1, name: 'Nguyễn Văn A' }, { id: 2, name: 'Nguyễn Văn B' }, { id: 3, name: 'Nguyễn Văn C' }]"
          >
            <template #appendInner>
              <Button
                size="w-[28px] h-[28px]"
                color="text-[#505258]"
                bg-color="transparent"
                hover=""
                shadow=""
              >
                <Icon variant="angle-down" width="12" height="12" />
              </Button>
            </template>

            <template #content="{ value }">
              <span
                v-for="v in value"
                :key="v.id"
                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-[#505258] ring-1 ring-inset ring-gray-500/10 mr-2"
              >
                {{ v.name }}
              </span>
            </template>
          </VaSelect>
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Gửi email <span class="text-[#ae2e24]">*</span>
          </div>

          <VaSelect
            class="w-full text-sm"
            content-class="kanban-select"
            placeholder="Chọn loại phỏng vấn"
            text-by="name"
            value-by="id"
            :options="[{ id: 1, name: 'Có' }, { id: 2, name: 'Không' }]"
          />
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Tiêu đề email <span class="text-[#ae2e24]">*</span>
          </div>

          <VaInput
            class="w-full text-sm"
            placeholder="Nhập tiêu đề email"
            autocomplete="off"
          />
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Cc
          </div>

          <VaSelect
            class="w-full text-sm"
            content-class="kanban-select"
            placeholder="Chọn loại phỏng vấn"
            text-by="name"
            value-by="id"
            :options="[{ id: 1, name: 'nva@gmail.com' }, { id: 2, name: 'nvb@gmail.com' }]"
          />
        </div>

        <div class="mb-4">
          <div class="text-sm text-[#292a2e] font-semibold mb-1">
            Nội dung email <span class="text-[#ae2e24]">*</span>
          </div>

          <div class="w-full h-[100vh] bg-red-100"></div>
          <quill-editor class="w-full h-[100vh] bg-red-100" theme="snow"></quill-editor>
        </div>
      </main>

      <footer class="min-h-[56px] flex justify-end items-center border-t border-[#0b120e24] px-6">
        <Button
          bg-color="bg-[#dddee1]"
          color="text-[#505258]"
          hover="hover:bg-[#00000052]"
          class="w-fit h-[36px] me-2"
          @click="hideInterviewTemplateForm"
        >
          Hủy
        </Button>

        <Button class="w-fit h-[36px]" @click="saveInterviewTemplate">
          <Icon variant="archive" width="14" height="14" />
          Lưu
        </Button>
      </footer>
    </div>
  </div>
</template>
