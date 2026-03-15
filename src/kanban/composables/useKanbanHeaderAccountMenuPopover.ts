import {
  ref,
  readonly
} from 'vue'

const accountMenu = ref<{
  visible: boolean
}>({
  visible: false
})

function showMenuPopover() {
  accountMenu.value.visible = true
}

function hideMenuPopover(
  callback?: any
) {
  accountMenu.value.visible = false

  if (typeof callback === 'function') {
    callback()
  }
}

export function useKanbanHeaderAccountMenuPopover() {
  return {
    accountMenu: readonly(accountMenu),
    showMenuPopover,
    hideMenuPopover
  }
}
