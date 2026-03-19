<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanTooltip } from '../composables/useKanbanTooltip'
  import { ref } from 'vue'

  const nav = ref<any>({
    width: 220,
    tab: 1,
    isToggle: false
  })

  const { showTooltip, hideTooltip } = useKanbanTooltip()

  function toggleNav() {
    if (! nav.value.isToggle) {
      nav.value.isToggle = true
    } else {
      nav.value.isToggle = false
    }
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

      <main class="w-full h-full p-4">
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
              @click="toggleNav"
              >
              <Icon width="14" height="14" variant="angle-right" />
            </Button>
          </div>

          <ul>
            <li>
              <Button
                size="w-full px-4 h-[36px]"
                color="text-[#1868db]"
                bg-color="bg-[#e9f2fe]"
                hover=""
                class="mb-2 gap-3"
                shadow=""
                align="items-center"
              >
                <Icon variant="home" width="14" height="14" />

                Home
              </Button>
            </li>

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
                <Icon variant="geist" width="14" height="14" />

                Đơn ứng tuyển
              </Button>
            </li>

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
                <Icon variant="circle-question" width="14" height="14" />

                Kiểm tra & Phỏng vấn
              </Button>
            </li>

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
