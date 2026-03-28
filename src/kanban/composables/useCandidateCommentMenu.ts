import {
  ref,
  readonly,
  onMounted,
  onUnmounted
} from 'vue'

const SECTIONS = {
  DELETE_COMMENT: 'deleteComment',
} as const

type SectionType =
  typeof SECTIONS[keyof typeof SECTIONS]

const state = ref<{
  x: number
  y: number
  visible: boolean
  anchorElement?: HTMLElement
  sectionLabel?: string
  sectionName?: string
}>({
  x: 0,
  y: 0,
  visible: false,
  anchorElement: undefined,
  sectionLabel: undefined,
  sectionName: undefined
})

function show(e: MouseEvent) {
  const anchorElement = e.currentTarget as HTMLElement
  const rect = anchorElement.getBoundingClientRect()

  state.value.x = rect.left
  state.value.y = rect.bottom
  state.value.visible = true
  state.value.anchorElement = anchorElement
  state.value.sectionLabel = undefined
  state.value.sectionName = undefined
}

function hide() {
  state.value.visible = false
}

function reset() {
  state.value.x = 0
  state.value.y = 0
  state.value.visible = false
  state.value.anchorElement = undefined
  state.value.sectionLabel = undefined
  state.value.sectionName = undefined
}

function updateMenuPopoverPosition() {
  if (
    ! state.value.visible ||
    ! state.value.anchorElement
  ) return

  const rect =state.value.anchorElement.getBoundingClientRect()

  state.value.x = rect.left
  state.value.y = rect.bottom
}

function setup() {
  onMounted(() => window.addEventListener('scroll', updateMenuPopoverPosition, true))
  onUnmounted(() => window.removeEventListener('scroll', updateMenuPopoverPosition, true))
}

function setSection(
  label?: string,
  name?: string
) {
  state.value.sectionLabel = label
  state.value.sectionName = name
}

function isActiveSection(sectionName?: SectionType) {
  return state.value.sectionName === sectionName
}

function hasActiveSection() {
  return isActiveSection(SECTIONS.DELETE_COMMENT)
}

function withoutActiveSection() {
  return ! hasActiveSection()
}

export function useKanbanCandidateCommentMenu() {
  return {
    state: readonly(state),
    SECTIONS: readonly(SECTIONS),
    show,
    hide,
    reset,
    setup,
    setSection,
    isActiveSection,
    hasActiveSection,
    withoutActiveSection
  }
}
