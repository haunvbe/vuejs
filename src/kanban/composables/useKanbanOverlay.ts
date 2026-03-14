import {
  ref,
  readonly
} from 'vue'

const overlay = ref<{
  visible: boolean
}>({
  visible: false
})

function showOverlay() {
  overlay.value.visible = true
}

function hideOverlay(
  callback?: any
) {
  overlay.value.visible = false

  if (typeof callback === 'function') {
    callback()
  }
}

export function useKanbanOverlay() {
  return {
    overlay: readonly(overlay),
    showOverlay,
    hideOverlay
  }
}
