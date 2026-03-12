import { ref } from 'vue'

const tooltip = ref<{
  x: number
  y: number
  text: string
  visible: boolean
}>({
  x: 0,
  y: 0,
  text: '',
  visible: false
})

const overlay = ref<{
  visible: boolean
}>({
  visible: true
})

const candidateForm = ref<{
  visible: boolean
}>({
  visible: false
})

function showTooltip(e: MouseEvent, text: string) {
  tooltip.value.visible = true
  tooltip.value.text = text

  const rect = (e.target as HTMLElement).getBoundingClientRect()

  tooltip.value.x = rect.left + rect.width / 2
  tooltip.value.y = rect.bottom + 2
}

function hideTooltip() {
  tooltip.value.visible = false
}

function showOverlay() {
  overlay.value.visible = true
}

function hideOverlay() {
  overlay.value.visible = false
}

function showCandidateForm() {
  candidateForm.value.visible = true
}

function hideCandidateForm() {
  candidateForm.value.visible = false
}

export function useKanbanGlobalState() {
  return {
    tooltip,
    overlay,
    candidateForm,
    showTooltip,
    hideTooltip,
    showOverlay,
    hideOverlay,
    showCandidateForm,
    hideCandidateForm
  }
}
