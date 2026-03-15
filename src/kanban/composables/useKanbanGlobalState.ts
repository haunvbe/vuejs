import { ref } from 'vue'
import { useKanbanColumnMenuPopover } from './useKanbanColumnMenuPopover'
import { useKanbanHeaderMenuPopover } from './useKanbanHeaderMenuPopover'
import { useKanbanCandidateForm } from './useKanbanCandidateForm'

const columnMenuPopover = useKanbanColumnMenuPopover()
const headerMenuPopover = useKanbanHeaderMenuPopover()
const candidateForm = useKanbanCandidateForm()

function hideMenusAndForms() {
  columnMenuPopover.hideMenuPopover()
  headerMenuPopover.hideMenuPopover()
  candidateForm.hideCandidateForm()
}

export function useKanbanGlobalState() {
  return {
    hideMenusAndForms
  }
}
