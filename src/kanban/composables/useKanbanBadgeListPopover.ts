import {
  ref,
  readonly
} from 'vue'

type BadgeType = 'gray'
  | 'yellow'
  | 'red'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

const defaultFieldMap = { id: 'id', name: 'name' }
const defaultBadgeType = 'gray'

const state = ref<{
  x: number
  y: number
  visible: boolean
  data?: any
  fieldMap?: any
  badgeType: BadgeType
  anchorElement?: HTMLElement
}>({
  x: 0,
  y: 0,
  visible: false,
  data: undefined,
  anchorElement: undefined,
  fieldMap: defaultFieldMap,
  badgeType: defaultBadgeType
})

function show(
  e: MouseEvent,
  data: any,
  badgeType: BadgeType = defaultBadgeType,
  fieldMap = defaultFieldMap
) {
  const anchorElement = e.currentTarget as HTMLElement
  const rect = anchorElement.getBoundingClientRect()

  state.value.x = rect.left + rect.width / 2
  state.value.y = rect.bottom + 10
  state.value.data = data
  state.value.visible = true
  state.value.anchorElement = anchorElement
  state.value.fieldMap = fieldMap
  state.value.badgeType = badgeType
}

function hide() {
  state.value.visible = false
}

function reset() {
  state.value.x = 0
  state.value.y = 0
  state.value.visible = false
  state.value.data = undefined
  state.value.anchorElement = undefined
  state.value.fieldMap = defaultFieldMap
  state.value.badgeType = defaultBadgeType
}

export function useKanbanBadgeListPopover() {
  return {
    state: readonly(state),
    show,
    hide,
    reset
  }
}
