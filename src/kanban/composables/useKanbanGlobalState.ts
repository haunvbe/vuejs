import { ref } from 'vue'
import { useKanbanColumnMenuPopover } from './useKanbanColumnMenuPopover'
import { useKanbanHeaderMenuPopover } from './useKanbanHeaderMenuPopover'
import { useKanbanCandidateForm } from './useKanbanCandidateForm'
import { useKanbanHeaderAccountMenuPopover } from './useKanbanHeaderAccountMenuPopover'

const columnMenuPopover = useKanbanColumnMenuPopover()
const headerMenuPopover = useKanbanHeaderMenuPopover()
const accountMenuPopover = useKanbanHeaderAccountMenuPopover()
const candidateForm = useKanbanCandidateForm()

function hideMenusAndForms() {
  columnMenuPopover.hideMenuPopover()
  headerMenuPopover.hideMenuPopover()
  accountMenuPopover.hideMenuPopover()
  candidateForm.hideCandidateForm()
}

export function useKanbanGlobalState() {
  return {
    hideMenusAndForms
  }
}
