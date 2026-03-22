<script setup lang="ts">
  import { ref } from 'vue'
  import { useKanbanTooltip } from '../composables/useKanbanTooltip'
  import { useKanbanCandidateDetailModal } from '../composables/useKanbanCandidateDetailModal'
  import { useKanbanBadgeListPopover } from '../composables/useKanbanBadgeListPopover'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import KanbanCandidateApplicationForm from './KanbanCandidateApplicationForm.vue'
import KanbanBadgeListPopover from './KanbanBadgeListPopover.vue'


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

  const source = ref<any>([{ id: 1, name: 'Website' }, { id: 2, name: 'Top CV' }, { id: 3, name: 'Mobile' }])

  function tabHome() {
    setTab(state.value.constants?.TAB_HOME)
  }

  function tabApplicationForm() {
    setTab(state.value.constants?.TAB_APPLICATION_FORM)
  }

  function tabEvaluation() {
    setTab(state.value.constants?.TAB_EVALUATION)
  }

  function tabActivityLog() {
    setTab(state.value.constants?.TAB_ACTIVITY_LOG)
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

      <main class="w-full flex max-h-[668px] pr-1 pl-4 py-4">
        <div class="kanban-aside w-[220px] py-2">
          <div class="leading-[40px] h-[40px] relative text-sm text-[#505258] font-semibold mb-2">
            Chi tiết ứng viên

            <Button
              size="w-[24px] h-[24px]"
              bg-color="bg-[#0515240f]"
              color="text-[#505258]"
              hover="hover:bg-[#0b120e24]"
              shadow=""
              class="absolute top-[8px] -right-[12px]"
              rounded="rounded-full"
              @mouseenter="showTooltip($event, 'Thu gọn bảng điều hướng')"
              @mouseleave="hideTooltip"
              >
              <Icon width="14" height="14" variant="angle-right" />
            </Button>
          </div>

          <ul>
            <li>
              <Button
                size="w-full px-4 h-[36px]"
                align="items-center"
                shadow=""
                color=""
                bg-color=""
                hover=""
                transition=""
                :class="generateClassNames(state.constants?.TAB_HOME)"
                @click="tabHome"
              >
                <Icon variant="home" width="14" height="14" />

                Home
              </Button>
            </li>

            <li>
              <Button
                size="w-full px-4 h-[36px]"
                align="items-center"
                shadow=""
                color=""
                bg-color=""
                hover=""
                transition=""
                :class="generateClassNames(state.constants?.TAB_APPLICATION_FORM)"
                @click="tabApplicationForm"
              >
                <Icon variant="geist" width="14" height="14" />

                Đơn ứng tuyển
              </Button>
            </li>

            <li>
              <Button
                size="w-full px-4 h-[36px]"
                align="items-center"
                shadow=""
                color=""
                bg-color=""
                hover=""
                transition=""
                :class="generateClassNames(state.constants?.TAB_EVALUATION)"
                @click="tabEvaluation"
              >
                <Icon variant="circle-question" width="14" height="14" />

                Kiểm tra & Phỏng vấn
              </Button>
            </li>

            <li>
              <Button
                size="w-full px-4 h-[36px]"
                align="items-center"
                shadow=""
                color=""
                bg-color=""
                hover=""
                transition=""
                :class="generateClassNames(state.constants?.TAB_ACTIVITY_LOG)"
                @click="tabActivityLog"
              >
                <Icon variant="activity" width="14" height="14" />

                Nhật ký hoạt động
              </Button>
            </li>

            <div class="py-1 mb-2">
              <div class="h-[1px] bg-[#0b120e24]"></div>
            </div>

            <li>
              <Button
                size="w-full px-4 h-[36px]"
                color="text-[#505258]"
                bg-color="transparent"
                hover="hover:bg-[#0b120e24]"
                class="mb-2 gap-3"
                shadow=""
                align="items-center"
              >
                <Icon variant="automation" width="14" height="14" />

                Hành động
              </Button>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <div class="w-full h-full kanban-scroll">
            <!-- <KanbanCandidateApplicationForm /> -->

            <div class="w-[96%] h-full py-2 mx-auto mb-4 flex">
              <div class="flex-1">
                <nav class="flex px-4 gap-2">
                  <Button
                    size="px-2.5 h-[32px]"
                    color="text-[#1868db]"
                    bg-color="bg-[#e9f2fe]"
                    hover="hover:bg-[#0b120e24]"
                    class="relative"
                    shadow=""
                  >
                    <Icon variant="book" width="16" height="16" />

                    Tổng quan
                    <span class="w-[12px] h-[2px] absolute bg-[#1868db] bottom-0"></span>
                  </Button>

                  <Button
                    size="px-2.5 h-[32px]"
                    color="text-[#505258]"
                    bg-color="transparent"
                    hover="hover:bg-[#0b120e24]"
                    class="relative"
                    shadow=""
                  >
                    <Icon variant="envelope" width="16" height="16" />

                    Email
                  </Button>

                  <Button
                    size="px-2.5 h-[32px]"
                    color="text-[#505258]"
                    bg-color="transparent"
                    hover="hover:bg-[#0b120e24]"
                    class="relative"
                    shadow=""
                  >
                    <Icon variant="file" width="16" height="16" />

                    Bài kiểm tra
                  </Button>

                  <Button
                    size="px-2.5 h-[32px]"
                    color="text-[#505258]"
                    bg-color="transparent"
                    hover="hover:bg-[#0b120e24]"
                    class="relative"
                    shadow=""
                  >
                    <Icon variant="activity" width="16" height="16" />

                    Lịch sử  ứng tuyển
                  </Button>
                </nav>

                <main class="w-[86%] p-4">
                  <section class="mt-5">
                    <header class="flex mb-4">
                      <Button
                        size="h-[32px]"
                        color="text-[#2a292e]"
                        bg-color="transparent"
                        hover=""
                        shadow=""
                      >
                        <Icon variant="description" width="20" height="20" />

                        Ghi chú
                      </Button>

                      <!-- <div class="flex flex-1 justify-end">
                        <Button
                          size="px-2 h-[32px]"
                          color="text-[#292a2e]"
                          bg-color="bg-[#0515240f]"
                          hover="hover:bg-[#0b120e24]"
                        >
                          Chỉnh sửa
                        </Button>
                      </div> -->
                    </header>

                    <div class="mb-4">
                      <Button
                        size="w-full px-4 py-2 h-[64px]"
                        color="text-[#6b6e76]"
                        bg-color="transparent"
                        class="border border-[#8c8f97] text-left"
                        font-weight="font-medium"
                        align=""
                        hover=""
                        shadow=""
                      >
                      Ghi chú chi tiết về ứng viên của bạn...
                    </Button>
                    </div>
                  </section>
                </main>
              </div>

              <div class="w-[254px]">
                <div class="mb-4">
                  <div class="text-sm text-[#292a2e] font-semibold mb-2">
                    Thông tin liên hệ
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="user" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.name"
                      class="flex-1 min-w-0 text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="circle-info" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.phone"
                      class="flex-1 min-w-0 text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="envelope" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.email"
                      class="flex-1 min-w-0 text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="clock" width="16" height="16" />
                    </Button>


                    <div class="flex-1 min-w-0">
                      <VaInput
                        v-model="user.date"
                        class="text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                        readonly
                      />

                      <div class="text-xs text-[#505258] font-medium mt-1">
                        Thời gian tạo hồ  của ứng viên.
                      </div>
                    </div>
                  </div>
                </div>

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

                <div class="mb-4">
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

                <div class="my-5">
                  <div class="w-full h-[1px] bg-[#0b120e24]"></div>
                </div>

                <div class="mb-4">
                  <div class="text-sm text-[#292a2e] font-semibold mb-2">
                    Tin tuyển dụng
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="repo" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.jobName"
                      class="flex-1 min-w-0 text-xs text-semibol kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="company" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.department"
                      class="flex-1 min-w-0 text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="company" width="16" height="16" />
                    </Button>

                    <VaInput
                      v-model="user.company"
                      class="flex-1 min-w-0 text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                      readonly
                    />
                  </div>

                  <div class="flex gap-2 mb-2">
                    <Button
                      size="w-[28px] h-[28px]"
                      color="text-[#505258]"
                      bg-color="transparent"
                      hover=""
                      shadow=""
                    >
                      <Icon variant="clock" width="16" height="16" />
                    </Button>

                    <div class="flex-1 min-w-0">
                      <VaInput
                        v-model="user.jobDated"
                        class="text-xs kanban-field--size-xs pointer-events-none bg-gray-100"
                        readonly
                      />

                      <div class="text-xs text-[#505258] font-medium mt-1">
                        Thời gian tuyển dụng bắt đầu và kết thúc từ ngày đến ngày.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-5">
                  <div class="w-full h-[1px] bg-[#0b120e24]"></div>
                </div>

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
            </div>

            <!-- <KanbanBadgeListPopover /> -->
          </div>

        </div>

        <!-- <div class="w-[40%]">
          <div class="flex">
            <Button
              size="px-2.5 h-[32px]"
              color="text-[#505258]"
              bg-color="transparent"
              hover="hover:bg-[#0b120e24]"
              class="me-2"
              shadow=""
            >
              <Icon variant="user" width="16" height="16" />

              Thông tin
            </Button>

            <Button
              size="px-2.5 h-[32px]"
              color="text-[#505258]"
              bg-color="transparent"
              hover="hover:bg-[#0b120e24]"
              class="me-2"
              shadow=""
            >
              <Icon variant="comment" width="16" height="16" />

              Bình luận
            </Button>

            <Button
              size="px-2.5 h-[32px]"
              color="text-[#1868db]"
              bg-color="bg-[#e9f2fe]"
              hover="hover:bg-[#0b120e24]"
              class="me-2 relative"
              shadow=""
            >
              <Icon variant="comment" width="16" height="16" />

              Bình luận
              <span class="w-[12px] h-[2px] absolute bg-[#1868db] bottom-0"></span>
            </Button>
          </div>
        </div> -->
      </main>
    </div>
  </div>
</template>
