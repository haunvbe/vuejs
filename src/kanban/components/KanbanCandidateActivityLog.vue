<template>
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
</template>
