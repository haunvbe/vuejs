import { ref } from 'vue'

const state = ref<{
  isEdit: boolean
  isDelete: boolean
  currentComment?: any
  content: string
  attachments: any
}>({
  isEdit: false,
  isDelete: false,
  currentComment: undefined,
  content: '',
  attachments: [],
})

function hasAttchments(): boolean {
  return state.value.attachments?.length
}

export function useCandidateComment() {
  return {
    state,
    hasAttchments
  }
}
