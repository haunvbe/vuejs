<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import { useKanbanColumnMenuPopover } from '../composables/useKanbanColumnMenuPopover'

  const {
    menuPopover,
    hideMenuPopover,
    setActionLabel,
    setActionName,
    isActionActive,
    isActionInactive,
    isActionEditStage,
    isActionDeleteStage,
    isActionSetRolePermissions
  } = useKanbanColumnMenuPopover()

  function editStage() {
    setActionLabel('Chỉnh sửa giai đoạn')
    setActionName(menuPopover.value.constants?.ACTION_EDIT_STAGE)

    // Do something else
  }

  function deleteStage() {
    setActionLabel('Xóa giai đoạn')
    setActionName(menuPopover.value.constants?.ACTION_DELETE_STAGE)

    // Do something else
  }

  function setRolePermissions() {
    setActionLabel('Phân quyền vai trò')
    setActionName(menuPopover.value.constants?.ACTION_SET_ROLE_PERMISSIONS)

    // Do something else
  }
</script>

<template>
  <Teleport v-if="menuPopover?.columnId" to="#kanban">
    <nav
      v-if="menuPopover.visible"
      :style="{ left: menuPopover.x + 'px', top: menuPopover.y + 'px' }"
      class="w-[304px] max-h-[400px] z-[1050] absolute bg-white rounded-[8px] shadow-overlay pb-4"
    >
      <header class="flex h-[48px] p-[4px]">
        <div class="w-[40px] h-[40px]">
          <Button
            v-if="isActionActive()"
            size="w-[32px] h-[32px]"
            color="text-[#505258]"
            bg-color="transparent"
            hover="hover:bg-[#0b120e24]"
            class="m-[4px]"
            shadow=""
            @click="setActionName(undefined)"
            >
            <Icon width="16" height="16" variant="angle-left" />
          </Button>
        </div>

        <div class="flex-1 h-[40px] leading-[40px] text-center text-[#505258] font-semibold text-sm truncate">
          {{ isActionActive() ? menuPopover.actionLabel : 'Hành động' }}
        </div>

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

      <section v-if="isActionInactive()">
        <ul>
          <li>
            <Button
              size="w-full h-[32px]"
              color="text-[#292a2e]"
              bg-color="transparent"
              hover="hover:bg-[#0515240f]"
              align="items-center"
              font-weight=""
              class="px-4"
              shadow=""
              rounded=""
              @click="editStage"
            >
              Chỉnh sửa giai đoạn
            </Button>
          </li>

          <li>
            <Button
              size="w-full h-[32px]"
              color="text-[#292a2e]"
              bg-color="transparent"
              hover="hover:bg-[#0515240f]"
              align="items-center"
              font-weight=""
              class="px-4"
              shadow=""
              rounded=""
              @click="setRolePermissions"
            >
              Phân quyền vai trò
            </Button>
          </li>

          <li>
            <Button
              size="w-full h-[32px]"
              color="text-[#292a2e]"
              bg-color="transparent"
              hover="hover:bg-[#0515240f]"
              align="items-center"
              font-weight=""
              class="px-4"
              shadow=""
              rounded=""
              @click="deleteStage"
            >
              Xóa giai đoạn
            </Button>
          </li>

          <li>
            <Button
              size="w-full h-[32px]"
              color="text-[#080f214a]"
              bg-color="transparent"
              align="items-center"
              font-weight=""
              class="px-4"
              hover=""
              shadow=""
              rounded=""
              disabled
              @click="deleteStage"
            >
              Xóa giai đoạn
            </Button>
          </li>
        </ul>
      </section>

      <section v-else-if="isActionEditStage()">
        <div class="w-[280px] mx-auto text-sm text-[#505258] mt-4">
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
              content-class="kanban-select"
              placeholder="Chọn mẫu email"
              text-by="name"
              value-by="id"
              :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
            />
          </div>

          <div class="flex justify-end">
            <Button class="w-fit h-[32px]">
              <Icon variant="archive" width="14" height="14" />
              Lưu
            </Button>
          </div>
        </div>
      </section>

      <section v-else-if="isActionSetRolePermissions()">
        <div class="w-[280px] mx-auto text-sm text-[#505258] mt-4">
          <div class="mb-4">
            <div class="font-semibold mb-1">
              Admin <span class="text-[#ae2e24]">*</span>
            </div>

            <VaSelect
              class="w-full text-sm"
              placeholder="Chọn quyền"
              text-by="name"
              value-by="id"
              :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
            />
          </div>

          <div class="mb-4">
            <div class="font-semibold mb-1">
              REC <span class="text-[#ae2e24]">*</span>
            </div>

            <VaSelect
              class="w-full text-sm"
              placeholder="Chọn quyền"
              text-by="name"
              value-by="id"
              :options="[{ id: 1, name: 'Nguyen Van A' }, { id: 2, name: 'Nguyen Van B' }]"
            />
          </div>

          <div class="flex justify-end">
            <Button class="w-fit h-[32px]">
              <Icon variant="archive" width="14" height="14" />
              Lưu
            </Button>
          </div>
        </div>
      </section>

      <section v-else-if="isActionDeleteStage()">
        <div class="w-[280px] mx-auto text-sm text-[#505258] mt-2">
          <div class="mb-4 px-2">
            Bạn có chắc chắn muốn xóa giai đoạn này không? Hành động này không thể hoàn tác và tất cả dữ liệu liên quan sẽ bị xóa vĩnh viễn.
          </div>

          <div class="flex justify-end">
            <Button
              class="w-fit h-[32px]"
              bg-color="bg-[#c9372C]"
              hover="hover:bg-[#ae2e24]"
            >
              <Icon variant="trash" width="14" height="14" />
              Xóa
            </Button>
          </div>
        </div>
      </section>
    </nav>
  </Teleport>
</template>
