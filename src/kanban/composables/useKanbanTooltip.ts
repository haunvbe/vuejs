import { ref } from 'vue'

const tooltipState = ref({
  x: 0,
  y: 0,
  text: '',
  visible: false
})

function showTooltip(e: MouseEvent, text: string) {
  tooltipState.value.visible = true
  tooltipState.value.text = text

  const rect = (e.target as HTMLElement).getBoundingClientRect()

  tooltipState.value.x = rect.left + rect.width / 2
  tooltipState.value.y = rect.bottom + 2
}

function hideTooltip() {
  tooltipState.value.visible = false
}

export function useKanbanTooltip() {
  return {
    tooltipState,
    showTooltip,
    hideTooltip
  }
}
