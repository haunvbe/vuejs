import { computed, ref, readonly, watch } from 'vue'

export type IdName = { id: number; name: string }

const OFFICE_INTERVIEW_TYPE_ID = 1

export const interviewTypeOptions: IdName[] = [
  { id: 1, name: 'Phỏng vấn tại văn phòng' },
  { id: 2, name: 'Phỏng vấn online' },
]

export const locationOptions: IdName[] = [
  { id: 1, name: 'Hà Nội' },
  { id: 2, name: 'Tp.Hồ Chí Minh' },
]

export const participantOptions: IdName[] = [
  { id: 1, name: 'Nguyen Van Hau' },
  { id: 2, name: 'Doan Thi Dieu Ninh' },
]

export const sendEmailSelectOptions: { value: boolean; name: string }[] = [
  { value: true, name: 'Có' },
  { value: false, name: 'Không' },
]

export type InterviewTemplateFormState = {
  interviewTypeId: number | null
  interviewDate: Date | null
  interviewTime: string
  durationDigits: string
  locationId: number | null
  /** VaSelect multiple + value-by id vẫn trả về object { id, name } trên model */
  participants: IdName[]
  sendEmail: boolean | null
}

const interviewTemplateForm = ref<{
  visible: boolean
}>({
  visible: true,
})

const formState = ref<InterviewTemplateFormState>({
  interviewTypeId: null,
  interviewDate: null,
  interviewTime: '',
  durationDigits: '',
  locationId: null,
  participants: [],
  sendEmail: null,
})

const isLocationRequired = computed(
  () => formState.value.interviewTypeId === OFFICE_INTERVIEW_TYPE_ID,
)

watch(
  () => formState.value.interviewTypeId,
  (id) => {
    if (id !== OFFICE_INTERVIEW_TYPE_ID) {
      formState.value.locationId = null
    }
  },
)

function showInterviewTemplateForm() {
  interviewTemplateForm.value.visible = true
}

function hideInterviewTemplateForm() {
  interviewTemplateForm.value.visible = false
}

function setDurationDigits(raw: string) {
  formState.value.durationDigits = raw.replace(/\D/g, '')
}

function saveInterviewTemplate() {
  const s = formState.value
  console.log('CandidateInterviewTemplateForm', {
    ...s,
    participantIds: s.participants.map((p) => p.id),
  })
}

export function useCandidateInterviewTemplateForm() {
  return {
    interviewTemplateForm: readonly(interviewTemplateForm),
    formState,
    isLocationRequired,
    interviewTypeOptions,
    locationOptions,
    participantOptions,
    sendEmailSelectOptions,
    showInterviewTemplateForm,
    hideInterviewTemplateForm,
    setDurationDigits,
    saveInterviewTemplate,
  }
}
