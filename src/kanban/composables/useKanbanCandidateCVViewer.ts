import {
  ref,
  readonly
} from 'vue'

const state = ref<{
  visible: boolean
}>({
  visible: false
})

function show() {
  state.value.visible = true
}

function hide() {
  state.value.visible = false
}

export function useKanbanCandidateCVViewer() {
  return {
    state: readonly(state),
    show,
    hide
  }
}
