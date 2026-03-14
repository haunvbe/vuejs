import {
  ref,
  readonly
} from 'vue'

const ACTION_EDIT_JOB = 'editJob'
const ACTION_EDIT_JOB_APPLICATION = 'editJobApplication'

const menuPopover = ref<{
  visible: boolean
  actionLabel?: string
  actionName?: string
  constants?: Record<string, string>
}>({
  visible: false,
  actionLabel: undefined,
  actionName: undefined,
  constants: { ACTION_EDIT_JOB, ACTION_EDIT_JOB_APPLICATION }
})

function showMenuPopover() {
  menuPopover.value.visible = true
  menuPopover.value.actionLabel = undefined
  menuPopover.value.actionName = undefined
}

function hideMenuPopover() {
  menuPopover.value.visible = false
  menuPopover.value.actionLabel = undefined
  menuPopover.value.actionName = undefined
}

function setActionLabel(val?: string) {
  menuPopover.value.actionLabel = val
}

function setActionName(val?: string) {
  menuPopover.value.actionName = val
}

function isActionEditJob() {
  return menuPopover.value.actionName === ACTION_EDIT_JOB
}

function isActionEditJobApplication() {
  return menuPopover.value.actionName === ACTION_EDIT_JOB_APPLICATION
}

function isActionActive() {
  return isActionEditJob()
    || isActionEditJobApplication()
}

function isActionInactive() {
  return ! isActionActive()
}

export function useKanbanHeaderMenuPopover() {
  return {
    menuPopover: readonly(menuPopover),
    setActionLabel,
    setActionName,
    showMenuPopover,
    hideMenuPopover,
    isActionActive,
    isActionInactive,
    isActionEditJob,
    isActionEditJobApplication
  }
}
