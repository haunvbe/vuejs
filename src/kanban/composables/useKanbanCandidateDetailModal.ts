import {
  ref,
  readonly
} from 'vue'

const TAB_HOME = 1
const TAB_APPLICATION_FORM = 2
const TAB_EVALUATION = 3
const TAB_ACTIVITY_LOG = 4

const state = ref<{
  width: string
  tab: number
  isToggle: boolean
  constants: Record<string, number>
}>({
  width: '220px',
  tab: 1,
  isToggle: false,
  constants: { TAB_HOME, TAB_APPLICATION_FORM, TAB_EVALUATION, TAB_ACTIVITY_LOG }
})

function setTab(index: any) {
  state.value.tab = index
}

function isTabHome(): boolean {
  return state.value.tab === TAB_HOME
}

function isTabApplicationForm(): boolean {
  return state.value.tab === TAB_APPLICATION_FORM
}

function isTabEvaluation(): boolean {
  return state.value.tab === TAB_EVALUATION
}

function isTabActivityLog(): boolean {
  return state.value.tab === TAB_ACTIVITY_LOG
}

function generateClassNames(index: any) {
  return state.value.tab === index
    ? 'mb-2 gap-3 text-[#1868db] bg-[#e9f2fe]'
    : 'mb-2 gap-3 text-[#505258] transparent hover:bg-[#0b120e24]'
}

export function useKanbanCandidateDetailModal() {
  return {
    state: readonly(state),
    setTab,
    isTabHome,
    isTabApplicationForm,
    isTabEvaluation,
    isTabActivityLog,
    generateClassNames
  }
}
