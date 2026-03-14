import {
  ref,
  readonly,
  onMounted,
  onUnmounted
} from 'vue'

const ACTION_EDIT_STAGE = 'editStage'
const ACTION_DELETE_STAGE = 'deleteStage'
const ACTION_SET_ROLE_PERMISSIONS = 'setRolePermissions'

const menuPopover = ref<{
  x: number
  y: number
  visible: boolean
  columnId?: string
  anchorElement?: HTMLElement
  actionLabel?: string
  actionName?: string
  constants?: Record<string, string>
}>({
  x: 0,
  y: 0,
  visible: false,
  columnId: undefined,
  anchorElement: undefined,
  actionLabel: undefined,
  actionName: undefined,
  constants: { ACTION_EDIT_STAGE, ACTION_DELETE_STAGE, ACTION_SET_ROLE_PERMISSIONS }
})

function showMenuPopover(
  e: MouseEvent,
  columnId?: string
) {
  const anchorElement = e.currentTarget as HTMLElement
  const rect = anchorElement.getBoundingClientRect()

  menuPopover.value.x = rect.left
  menuPopover.value.y = rect.bottom
  menuPopover.value.visible = true
  menuPopover.value.columnId = columnId
  menuPopover.value.anchorElement = anchorElement
  menuPopover.value.actionLabel = undefined
  menuPopover.value.actionName = undefined
}

function hideMenuPopover() {
  menuPopover.value.visible = false
  menuPopover.value.actionLabel = undefined
  menuPopover.value.actionName = undefined
}

function updateMenuPopoverPosition() {
  if (
    ! menuPopover.value.visible ||
    ! menuPopover.value.anchorElement
  ) return

  const rect = menuPopover.value.anchorElement.getBoundingClientRect()

  menuPopover.value.x = rect.left
  menuPopover.value.y = rect.bottom
}

function setup() {
  onMounted(() => window.addEventListener('scroll', updateMenuPopoverPosition, true))
  onUnmounted(() => window.removeEventListener('scroll', updateMenuPopoverPosition, true))
}

function setActionLabel(val?: string) {
  menuPopover.value.actionLabel = val
}

function setActionName(val?: string) {
  menuPopover.value.actionName = val
}

function isActionEditStage() {
  return menuPopover.value.actionName === ACTION_EDIT_STAGE
}

function isActionDeleteStage() {
  return menuPopover.value.actionName === ACTION_DELETE_STAGE
}

function isActionSetRolePermissions() {
  return menuPopover.value.actionName === ACTION_SET_ROLE_PERMISSIONS
}

function isActionActive() {
  return isActionEditStage()
    || isActionDeleteStage()
    || isActionSetRolePermissions()
}

function isActionInactive() {
  return ! isActionActive()
}

export function useKanbanColumnMenuPopover() {
  return {
    menuPopover: readonly(menuPopover),
    setup,
    setActionLabel,
    setActionName,
    showMenuPopover,
    hideMenuPopover,
    updateMenuPopoverPosition,
    isActionActive,
    isActionInactive,
    isActionEditStage,
    isActionDeleteStage,
    isActionSetRolePermissions
  }
}
