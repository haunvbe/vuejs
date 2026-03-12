<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
</script>

<template>
  <nav class="w-[304px] max-h-[400px] z-[1050] absolute top-0 right-0 bg-white shadow-sm rounded-[8px] shadow-md">
    <header class="flex h-[48px] p-[4px]">
      <div class="flex-1 h-[40px] pl-[40px] leading-[40px] text-center text-[#505258] font-semibold text-sm">
        Menu
      </div>

      <div class="w-[40px] h-[40px]">
        <Button
          size="w-[32px] h-[32px]"
          color="text-[#505258]"
          bg-color="transparent"
          hover="hover:bg-[#00000029]"
          class="m-[4px]"
          shadow=""
          >
          <Icon width="14" height="14" variant="close" />
        </Button>
      </div>
    </header>

    <section>
      <ul class="text-sm text-[#505258] px-2">
        <li class="flex items-center rounded-[8px] cursor-pointer mb-2">
          <Button
            size="w-full h-[32px]"
            color="text-[#292a2e]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            font-weight="font-medium"
            class="px-4"
            shadow=""
          >
            <Icon variant="pen-to-square" width="14" height="14" />

            Chỉnh sửa tin tuyển dụng
          </Button>
        </li>

        <li class="flex items-center rounded-[8px] cursor-pointer mb-2">
          <Button
            size="w-full h-[32px]"
            color="text-[#292a2e]"
            bg-color="transparent"
            hover="hover:bg-[#0515240f]"
            align="items-center"
            font-weight="font-medium"
            class="px-4"
            shadow=""
          >
            <Icon variant="copy" width="14" height="14" />

            Sao chép tin tuyển dụng
          </Button>
        </li>
      </ul>
    </section>
  </nav>
</template>

<style scoped>
</style>
