<script setup lang="ts">
  import { ref } from 'vue'
  import { useKanbanTooltip } from '../composables/useKanbanTooltip'
  import { useKanbanCandidateDetailModal } from '../composables/useKanbanCandidateDetailModal'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'


  const { state, setTab, generateClassNames } = useKanbanCandidateDetailModal()
  const { showTooltip, hideTooltip } = useKanbanTooltip()

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
  <div class="kanban-candidate-detail-modal fixed top-0 left-0 w-full h-full flex justify-center items-start z-[1000] bg-[rgba(0,0,0,0.15)]">
    <div class="w-[1080px] min-h-[320px] max-h-[80vh] mt-[48px] bg-white rounded-[12px] shadow-overlay">
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
            @mouseenter="showTooltip($event, 'Thoát')"
            @mouseleave="hideTooltip"
            >
            <Icon width="16" height="16" variant="close" />
          </Button>
        </div>
      </header>

      <main class="w-full flex max-h-[668px] p-4">
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

        <div class="flex-1 kanban-scroll">
          <div class="w-[80%] h-full py-4 mx-auto">
            <div>
            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-2.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">
                    Hau Nguyen added a comment
                  </span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            <div class="kanban-activity-log flex gap-2 mb-6">
              <div class="w-[32px] h-[32px]">
                <Button
                  size="w-[32px] h-[32px]"
                  color=""
                  bg-color="transparent"
                  hover=""
                  shadow=""
                  >
                  <img src="../../assets/avatar/profile-1.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
                </Button>
              </div>
              <div class="flex-1">
                <div class="text-sm mb-1">
                  <span class="text-[#292a2e] font-semibold">Hau Nguyen</span>
                  nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:
                </div>
                <div class="text-xs text-[#1868db] underline">
                  Mar 8, 2026, 9:04 AM
                </div>
              </div>
            </div>

            </div>

            <div class="w-full h-[40px] flex justify-center">
              <Button
                size="w-1/2 h-[32px]"
                color="text-[#292a2e]"
                bg-color="bg-[#0515240f]"
                hover="hover:bg-[#0b120e24]"
                shadow=""
                font-weight="font-medium"
                >
                Tải thêm hoạt động
              </Button>
            </div>
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
