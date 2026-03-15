<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanHeaderAccountMenuPopover } from '../composables/useKanbanHeaderAccountMenuPopover'

  const {
    accountMenu,
    hideMenuPopover
  } = useKanbanHeaderAccountMenuPopover()
</script>
<template>
  <nav v-if="accountMenu.visible" class="w-[304px] max-h-[400px] z-[1050] absolute top-[48px] right-[4px] bg-white shadow-sm rounded-[8px] shadow-overlay">
    <header class="flex h-[40px] p-[4px]">
      <div class="flex-1 h-[40px] pl-[40px] leading-[40px] text-center text-[#505258] font-semibold text-sm"></div>

      <div class="w-[40px] h-[40px]">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#0b120e24]"
          class="m-[4px]"
          shadow=""
          @click="hideMenuPopover"
          >
          <Icon width="14" height="14" variant="close" />
        </Button>
      </div>
    </header>

    <section>
      <div class="px-4">
        <div class="text-[11px] font-semibold text-[#6b6e76]">TÀI KHOẢN</div>

        <div class="py-3 flex">
          <Button
            size="w-[40px] h-[40px]"
            color=""
            bg-color="transparent"
            hover=""
            shadow=""
            >
            <div class="w-[40px] h-[40px] rounded-full bg-red-100"></div>
          </Button>

          <div class="ml-2 py-[2px] flex-1">
            <div class="text-sm text-[#292a2e] font-semibold truncate">
              Hau Nguyen
            </div>

            <div class="text-xs text-[#505258] truncate">
              haunv.be@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-1">
        <div class="h-[1px] bg-[#0b120e24]"></div>
      </div>

      <ul class="py-2">
        <li>
          <Button
            size="w-full h-[32px]"
            color="text-[#292a2e]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            class="px-4"
            font-weight=""
            shadow=""
            rounded=""
          >
            Trang cá nhân
          </Button>
        </li>

        <li>
          <Button
            size="w-full h-[32px]"
            color="text-[#292a2e]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            class="px-4"
            font-weight=""
            shadow=""
            rounded=""
          >
            Đăng xuất
          </Button>
        </li>
      </ul>
    </section>
  </nav>
</template>
