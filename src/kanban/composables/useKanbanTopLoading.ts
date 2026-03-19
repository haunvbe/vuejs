import {
  ref,
  readonly
} from 'vue'

const loading = ref<{
  visible: boolean
}>({
  visible: false
})

function showLoading() {
  loading.value.visible = true
}

function hideLoading(
  callback?: any
) {
  loading.value.visible = false

  if (typeof callback === 'function') {
    callback()
  }
}

export function useKanbanTopLoading() {
  return {
    loading: readonly(loading),
    showLoading,
    hideLoading
  }
}
