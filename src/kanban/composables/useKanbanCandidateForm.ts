import {
  ref,
  readonly
} from 'vue'

const candidateForm = ref<{
  visible: boolean
}>({
  visible: false
})

function showCandidateForm() {
  candidateForm.value.visible = true
}

function hideCandidateForm() {
  candidateForm.value.visible = false
}

export function useKanbanCandidateForm() {
  return {
    candidateForm: readonly(candidateForm),
    showCandidateForm,
    hideCandidateForm,
  }
}
