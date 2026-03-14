import {
  ref,
  readonly
} from 'vue'

const tooltip = ref<{
  x: number
  y: number
  text: string
  visible: boolean
  anchorElement?: HTMLElement
}>({
  x: 0,
  y: 0,
  text: '',
  visible: false,
  anchorElement: undefined
})

function showTooltip(
  e: MouseEvent,
  text: string
) {
  const anchorElement = e.currentTarget as HTMLElement
  const rect = anchorElement.getBoundingClientRect()

  tooltip.value.x = rect.left + rect.width / 2
  tooltip.value.y = rect.bottom + 2
  tooltip.value.text = text
  tooltip.value.visible = true
}

function hideTooltip() {
  tooltip.value.visible = false
}

export function useKanbanTooltip() {
  return {
    tooltip: readonly(tooltip),
    showTooltip,
    hideTooltip
  }
}
