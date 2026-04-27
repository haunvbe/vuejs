<script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'
  import { useKanbanTooltip } from '../composables/useKanbanTooltip'
  import { useKanbanCandidateDetailModal } from '../composables/useKanbanCandidateDetailModal'
  import { useKanbanBadgeListPopover } from '../composables/useKanbanBadgeListPopover'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import KanbanCandidateApplicationForm from './KanbanCandidateApplicationForm.vue'
  import KanbanBadgeListPopover from './KanbanBadgeListPopover.vue'
import CandidateCommentSection from './CandidateCommentSection.vue'


  const { state, setTab, generateClassNames } = useKanbanCandidateDetailModal()
  const { showTooltip, hideTooltip } = useKanbanTooltip()
  const { show: showBadgeListPopover } = useKanbanBadgeListPopover()
  const value = ref<any>([{ id: 1, name: 'haunv' }, { id: 2, name: 'ninhdtd' }, { id: 3, name: 'trangdt' }])
  const user = ref<any>({
    name: 'Nguyễn Văn Hậu',
    phone: '0345670976',
    email: 'haunv@kaopiz.com',
    date: '22/10/2025 20:10',
    date1: undefined,
    jobName: 'Test Manually',
    company: 'Kaopiz Hodings',
    department: 'Kaopiz Software',
    jobDated: '01/01/2025 - 10/01/2025',
    description: ''
  })

  const isDescription = ref<boolean>(false)

  const source = ref<any>([{ id: 1, name: 'Website' }, { id: 2, name: 'Top CV' }, { id: 3, name: 'Mobile' }])

  function getInitials(name: string) {
    if (!name || typeof name !== "string") return "";

    // Remove extra spaces and split words
    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      // Single word → take first 2 letters
      return words[0].slice(0, 2).toUpperCase();
    }

    // Take first letter of first and last word
    const first = words[0][0];
    const last = words[words.length - 1][0];

    return (first + last).toUpperCase();
  }
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000] bg-[rgba(0,0,0,0.15)]">
    <div id="kanbanCandidateDetailModal" class="w-[1180px] min-h-[320px] max-h-[80vh] mt-[48px] bg-white rounded-[12px] shadow-overlay">
      <header class="min-h-[54px] border-b border-[#0b120e24] flex justify-between items-center px-6">
        <h1 class="text-[#292a2e] font-semibold">
          Ứng tuyển
        </h1>

        <div>
          <Button
            size="w-[32px] h-[32px]"
            bg-color="transparent"
            color="text-[#505258]"
            hover="hover:bg-[#0b120e24]"
            shadow=""
            @mouseenter="showTooltip($event, 'Thoát')"
            @mouseleave="hideTooltip"
            >
            <Icon width="16" height="16" variant="close" />
          </Button>
        </div>
      </header>

      <main class="w-full flex max-h-[668px] kanban-scroll pr-1 pl-4 py-4">
         <div class="w-[254px]">
            <div class="flex items-center gap-2">
              <div class="w-[40px] h-[40px] rounded-full bg-[#e6f1fb] text-[#0c447c] text-center leading-[40px] text-sm font-semibold">
                {{ getInitials('Nguyễn Văn Hậu') }}
              </div>

              <div class="flex-1">
                <div class="text-sm text-[#292a2e] font-semibold">
                  Nguyễn Văn Hậu
                </div>

                <div class="text-xs text-[#505258] font-medium">
                  Senior Software Engineer
                </div>
              </div>
            </div>

            <div class="w-full h-[1px] bg-[#0b120e24] my-4"></div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Thông tin liên hệ
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="phone" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.phone }}
                </div>
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="envelope" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.email }}
                </div>
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="clock" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  <span class="text-[#505258] font-medium me-1">
                    Tạo hồ sơ:
                  </span>

                  {{ user.date }}
                </div>
              </div>
            </div>

            <div class="w-full h-[1px] bg-[#0b120e24] my-4"></div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Người phụ trách
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="user-group" width="16" height="16" />
                </Button>

                <VaSelect
                  v-model="value"
                  class="flex-1 min-w-0 kanban-field--size-md kanban-badge--blue"
                  content-class="kanban-select"
                  value-by="id"
                  text-by="name"
                  multiple
                  dropdown-icon=""
                  :max-visible-options="2"
                  :options="value"
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
                      class="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-[#505258] ring-1 ring-inset ring-gray-500/10 mr-2">
                      {{ v.name }}
                    </span>
                  </template>
                </VaSelect>
              </div>
            </div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Nguồn tuyển dụng
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="globe" width="16" height="16" />
                </Button>

                <VaSelect
                  v-model="source"
                  class="flex-1 min-w-0 kanban-field--size-md kanban-badge--blue"
                  content-class="kanban-select"
                  value-by="id"
                  text-by="name"
                  multiple
                  dropdown-icon=""
                  :max-visible-options="2"
                  :options="source"
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
                      class="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-[#505258] ring-1 ring-inset ring-gray-500/10 mr-2">
                      {{ v.name }}
                    </span>
                  </template>
                </VaSelect>
              </div>
            </div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Ngày ứng tuyển
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="clock" width="16" height="16" />
                </Button>

                <VaDateInput
                  v-model="user.date1"
                  class="flex-1 min-w-0 text-xs kanban-field--size-md"
                  content-class="kanban-date"
                  manual-input
                  icon=""
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
                </VaDateInput>
              </div>
            </div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Ngày gửi offer
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="clock" width="16" height="16" />
                </Button>

                <VaDateInput
                  v-model="user.date1"
                  class="flex-1 min-w-0 text-xs kanban-field--size-md"
                  content-class="kanban-date"
                  manual-input
                  icon=""
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
                </VaDateInput>
              </div>
            </div>

            <div>
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Ngày nhận việc
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="clock" width="16" height="16" />
                </Button>

                <VaDateInput
                  v-model="user.date1"
                  class="flex-1 min-w-0 text-xs kanban-field--size-md"
                  content-class="kanban-date"
                  icon=""
                >
                  <template #appendInner>
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="copilot" width="16" height="16" />
                    </Button>
                  </template>
                </VaDateInput>
              </div>
            </div>

            <div class="w-full h-[1px] bg-[#0b120e24] my-4"></div>

            <div>
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Tin tuyển dụng
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="repo" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.jobName }}
                </div>
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="company" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.department }}
                </div>
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="company" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.company }}
                </div>
              </div>

              <div class="flex items-center gap-2 mb-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="clock" width="16" height="16" />
                </Button>

                <div class="flex-1 min-w-0 text-xs h-[28px] flex items-center font-semibold">
                  {{ user.jobDated }}
                </div>
              </div>
            </div>

            <div class="w-full h-[1px] bg-[#0b120e24] my-4"></div>

            <div class="mb-4">
              <div class="text-sm text-[#292a2e] font-semibold mb-2">
                Yêu cầu tuyển dụng
              </div>

              <div class="flex gap-2">
                <Button
                  size="w-[28px] h-[28px]"
                  color="text-[#505258]"
                  bg-color="transparent"
                  hover=""
                  shadow=""
                >
                  <Icon variant="table" width="16" height="16" />
                </Button>

                <VaSelect
                  v-model="value"
                  class="flex-1 min-w-0 kanban-field--size-md kanban-badge--blue"
                  content-class="kanban-select"
                  value-by="id"
                  text-by="name"
                  multiple
                  dropdown-icon=""
                  :max-visible-options="2"
                  :options="value"
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
                      class="inline-flex items-center rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium text-[#505258] ring-1 ring-inset ring-gray-500/10 mr-2">
                      {{ v.name }}
                    </span>
                  </template>
                </VaSelect>
              </div>
            </div>

            <div class="flex justify-end my-5">
              <Button
                size="px-2 h-[28px]"
                class="me-2"
                font-size="text-xs"
                >
                <Icon variant="archive" width="12" height="12" />
                Lưu
              </Button>

              <Button
                size="px-2 h-[28px]"
                bg-color="bg-[#dddee1]"
                color="text-[#505258]"
                hover="hover:bg-[#00000052]"
                font-size="text-xs"
              >
                Đặt lại
              </Button>
            </div>
          </div>

        <div class="flex-1">
          <div class="w-full h-full kanban-scroll">
            <div class="w-[96%] h-full py-2 mx-auto mb-4 flex">
              <div class="flex-1">

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
