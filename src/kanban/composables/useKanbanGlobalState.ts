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

const menuPopover = ref<{
  x: number
  y: number
  visible: boolean
  columnId?: string
}>({
  x: 0,
  y: 0,
  visible: false,
  columnId: ''
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

function showMenuPopover(e: MouseEvent, columnId?: string) {
  menuPopover.value.visible = true
  menuPopover.value.columnId = columnId

  const rect = (e.target as HTMLElement).getBoundingClientRect()

  menuPopover.value.x = rect.left + rect.width
  menuPopover.value.y = rect.bottom
}

function hideMenuPopover() {
  menuPopover.value.visible = false
}

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
    menuPopover,
    showTooltip,
    showOverlay,
    showCandidateForm,
    showMenuPopover,
    hideTooltip,
    hideOverlay,
    hideCandidateForm,
    hideMenuPopover
  }
}
