<script setup lang="ts">
  import { ref } from 'vue'
  import { useCandidateComment } from '../composables/useCandidateComment'
  import Button from '@/components/Button.vue'
  import Icon from '@/components/Icon.vue'
  import CandidateCreateCommentComposer from './CandidateCreateCommentComposer.vue'
  import CandidateEditCommentComposer from './CandidateEditCommentComposer.vue'
  import CandidateCommentMenu from './CandidateCommentMenu.vue'
  import { useKanbanCandidateCommentMenu } from '../composables/useCandidateCommentMenu'

  const { state } = useCandidateComment()
  const {
    SECTIONS,
    state: candidateCommentMenuState,
    show: showCandidateCommentMenu,
    setSection
  } = useKanbanCandidateCommentMenu()

  const comments = ref<any>([
    {
      id: 1,
      username: 'Hau Nguyen',
      content: 'nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:',
      attachments: [],
      created_at: 'Mar 8, 2026, 9:04 AM'
    },
    {
      id: 2,
      username: 'Doan Thi Dieu Ninh',
      content: 'nghe giống kiểu “coder hệ hardcore” luôn 😄 — nhưng nếu để lâu thì dễ burnout đấy. Mình tóm lại profile của bạn theo những gì bạn nói, rồi phân tích luôn cái lợi – hại để bạn nhìn rõ hơn:',
      attachments: [{ name: 'image1.png' }, { name: 'NguyenVanHau_CV_BackendDeveloper.pdf' }, { name: 'O\'\Reilly.High.Performance.MySQL.3rd.Edition.M.pdf' }],
      created_at: 'Mar 8, 2026, 9:04 AM'
    }
  ])

  function editComment(comment: any) {
    state.value.isEdit = true
    state.value.currentComment = comment
  }

  function deleteComment(
    comment: any,
    e: MouseEvent
  ) {
    state.value.isDelete = true
    state.value.currentComment = comment

    showCandidateCommentMenu(e)
    setSection('Xóa bình luận', SECTIONS.DELETE_COMMENT)
  }
</script>

<template>
  <section>
    <header class="flex mb-4">
      <Button
        size="h-[32px]"
        color="text-[#2a292e]"
        bg-color="transparent"
        hover=""
        shadow=""
      >
        <Icon variant="comment" width="16" height="16" />

        Bình luận
      </Button>
    </header>

    <main class="mb-8">
      <div v-for="comment in comments"
        :key="comment.id"
        class="kanban-comment-item flex gap-2 mb-4"
      >
        <div class="w-[32px] h-[32px]">
          <Button
            size="w-[32px] h-[32px]"
            color=""
            bg-color="transparent"
            hover=""
            shadow=""
            >
            <img src="../../assets/avatar/profile-2.png" class="w-[32px] h-[32px] rounded-full bg-red-100" />
          </Button>
        </div>

        <div class="flex-1">
          <div class="text-[#292a2e] text-sm font-semibold mb-1">
            {{ comment.username }}
          </div>

          <div class="w-full min-h-[48px] text-sm flex flex-col bg-[#f0f2f5] rounded-xl px-3 py-2 mb-1">
            <div v-if="state.isEdit && state.editingComment?.id === comment.id">
              <CandidateEditCommentComposer />
            </div>

            <div v-else>
              <div v-if="comment.attachments?.length" class="attachments mb-2">
                <div
                  v-for="attachment in comment.attachments"
                  :key="attachment.name"
                  class="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-[#1868db] hover:underline ring-1 ring-inset ring-gray-500/10 shadow-raised mr-2 mb-1 gap-1 cursor-pointer">
                    {{ attachment.name }}
                </div>
              </div>

              <div>
                {{ comment.content }}
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div class="text-xs text-[#505258]">
              {{ comment.created_at }}
            </div>

            <div
              @click="editComment(comment)"
              class="text-xs font-medium cursor-pointer"
              :class="state.isEdit && state.currentComment?.id === comment.id ? 'text-[#1868db] underline' : 'text-[#505258] hover:text-[#1868db] hover:underline'"
            >
              Chỉnh sửa
            </div>

            <div
              @click="deleteComment(comment, $event)"
              class="text-xs font-medium cursor-pointer"
              :class="state.isEdit && state.currentComment?.id === comment.id ? '' : 'text-[#505258] hover:text-[#1868db] hover:underline'"
            >
              Xóa
            </div>
          </div>
        </div>
      </div>
    </main>

    <CandidateCreateCommentComposer />
    <CandidateCommentMenu />
  </section>
</template>
