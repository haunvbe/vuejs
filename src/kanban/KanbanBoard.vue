<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import Sortable from 'sortablejs'
  import KanbanColumn from './components/KanbanColumn.vue'
  import KanbanColumnAdd from './components/KanbanColumnAdd.vue'
  import KanbanOverlay from './components/KanbanOverlay.vue'
  import KanbanCandidateForm from './components/KanbanCandidateForm.vue'
  import KanbanLoading from './components/KanbanLoading.vue'
  import KanbanHeader from './components/KanbanHeader.vue'
  import KanbanTooltip from './components/KanbanTooltip.vue'
  import KanbanCardMenuPopover from './components/KanbanColumnMenuPopover.vue'
  import { useKanbanColumnMenuPopover } from './composables/useKanbanColumnMenuPopover'
  import { useKanbanLoading } from './composables/useKanbanLoading'
  import KanbanCandidateDetailModal from './components/KanbanCandidateDetailModal.vue'
  import KanbanCandidateCVViewer from './components/KanbanCandidateCVViewer.vue'
  import KanbanBadgeListPopover from './components/KanbanBadgeListPopover.vue'

  // const kanbanLoading = useKanbanLoading()

  // kanbanLoading.showLoading()

  const stages = ref<any>([
    {
      id: 1,
      name: 'Ứng tuyển',
      data: [
        { id: 1, name: 'Nguyễn Văn An', email: 'nva@gmail.com', phone: '09120000011234', position: 'Frontend Developer' },
        { id: 2, name: 'Trần Thị Mai', email: 'mai.tran@candidate.com', phone: '0912000002', position: 'UI/UX Designer' },
        { id: 3, name: 'Lê Minh Hoàng', email: 'hoang.le@candidate.com', phone: '0912000003', position: 'Backend Developer' },
        { id: 4, name: 'Phạm Quang Huy', email: 'huy.pham@candidate.com', phone: '0912000004', position: 'Fullstack Developer' },
        { id: 5, name: 'Đỗ Thu Trang', email: 'trang.do@candidate.com', phone: '0912000005', position: 'QA Engineer' }
      ]
    },
    {
      id: 2,
      name: 'Sơ loại CV',
      data: [
        // { id: 6, name: 'Nguyễn Thành Nam', email: 'nam.nguyen@candidate.com', phone: '0912000006', position: 'Backend Developer' },
        // { id: 7, name: 'Phan Thu Hà', email: 'ha.phan@candidate.com', phone: '0912000007', position: 'Product Designer' },
        // { id: 8, name: 'Bùi Đức Long', email: 'long.bui@candidate.com', phone: '0912000008', position: 'DevOps Engineer' },
        // { id: 9, name: 'Hoàng Minh Tú', email: 'tu.hoang@candidate.com', phone: '0912000009', position: 'Mobile Developer' },
        // { id: 10, name: 'Vũ Ngọc Lan', email: 'lan.vu@candidate.com', phone: '0912000010', position: 'Business Analyst' }
      ]
    },
    {
      id: 3,
      name: 'Làm test',
      data: [
        { id: 11, name: 'Nguyễn Quang Dũng', email: 'dung.nguyen@candidate.com', phone: '0912000011', position: 'Frontend Test' },
        { id: 12, name: 'Trần Khánh Linh', email: 'linh.tran@candidate.com', phone: '0912000012', position: 'UI Design Test' },
        // { id: 13, name: 'Lê Thanh Bình', email: 'binh.le@candidate.com', phone: '0912000013', position: 'Backend Test' },
        // { id: 14, name: 'Phạm Đức Anh', email: 'anh.pham@candidate.com', phone: '0912000014', position: 'Algorithm Test' },
        // { id: 15, name: 'Nguyễn Hải Yến', email: 'yen.nguyen@candidate.com', phone: '0912000015', position: 'QA Automation Test' }
      ]
    },
    {
      id: 4,
      name: 'Phỏng vấn vòng 1',
      data: [
        { id: 16, name: 'Nguyễn Minh Đức', email: 'duc.nguyen@candidate.com', phone: '0912000016', position: 'Frontend Interview' },
        // { id: 17, name: 'Trần Thanh Tùng', email: 'tung.tran@candidate.com', phone: '0912000017', position: 'Backend Interview' },
        // { id: 18, name: 'Phạm Ngọc Ánh', email: 'anh.pham@candidate.com', phone: '0912000018', position: 'UI/UX Interview' },
        // { id: 19, name: 'Lê Hoài Nam', email: 'nam.le@candidate.com', phone: '0912000019', position: 'DevOps Interview' },
        // { id: 20, name: 'Đỗ Hồng Phúc', email: 'phuc.do@candidate.com', phone: '0912000020', position: 'QA Interview' }
      ]
    },
    {
      id: 5,
      name: 'Phỏng vấn vòng 2',
      data: [
        { id: 21, name: 'Nguyễn Trung Kiên', email: 'kien.nguyen@candidate.com', phone: '0912000021', position: 'System Design' },
      //   { id: 22, name: 'Trần Thu Hương', email: 'huong.tran@candidate.com', phone: '0912000022', position: 'UX Strategy' },
      //   { id: 23, name: 'Lê Văn Phú', email: 'phu.le@candidate.com', phone: '0912000023', position: 'Architecture Interview' },
      //   { id: 24, name: 'Phạm Minh Châu', email: 'chau.pham@candidate.com', phone: '0912000024', position: 'Product Thinking' },
      //   { id: 25, name: 'Hoàng Văn Khánh', email: 'khanh.hoang@candidate.com', phone: '0912000025', position: 'Performance Optimization' }
      ]
    },
    {
      id: 6,
      name: 'Phỏng vấn vòng cuối',
      data: [
        { id: 26, name: 'Nguyễn Anh Tuấn', email: 'tuan.nguyen@candidate.com', phone: '0912000026', position: 'Final HR Interview' },
        // { id: 27, name: 'Trần Hữu Phát', email: 'phat.tran@candidate.com', phone: '0912000027', position: 'Culture Fit Interview' },
        // { id: 28, name: 'Phạm Thị Ngọc', email: 'ngoc.pham@candidate.com', phone: '0912000028', position: 'Leadership Interview' },
        // { id: 29, name: 'Lê Công Thành', email: 'thanh.le@candidate.com', phone: '0912000029', position: 'Team Matching Interview' },
        // { id: 30, name: 'Nguyễn Thanh Bình', email: 'binh.nguyen@candidate.com', phone: '0912000030', position: 'Final Evaluation' }
      ]
    },
    {
      id: 7,
      name: 'Đã gửi offer',
      data: [
        { id: 31, name: 'Nguyễn Văn Sơn', email: 'son.nguyen@candidate.com', phone: '0912000031', position: 'Offer Frontend Dev' },
        // { id: 32, name: 'Trần Thị Vy', email: 'vy.tran@candidate.com', phone: '0912000032', position: 'Offer Product Designer' },
        // { id: 33, name: 'Lê Minh Khôi', email: 'khoi.le@candidate.com', phone: '0912000033', position: 'Offer Backend Dev' },
        // { id: 34, name: 'Phạm Tuấn Anh', email: 'anh.pham@candidate.com', phone: '0912000034', position: 'Offer DevOps Engineer' },
        // { id: 35, name: 'Nguyễn Quỳnh Anh', email: 'quynh.nguyen@candidate.com', phone: '0912000035', position: 'Offer QA Engineer' }
      ]
    },
    {
      id: 8,
      name: 'Đã nhận offer',
      data: [
        { id: 36, name: 'Nguyễn Văn Bảo', email: 'bao.nguyen@candidate.com', phone: '0912000036', position: 'Accepted Offer FE' },
        // { id: 37, name: 'Trần Hải Đăng', email: 'dang.tran@candidate.com', phone: '0912000037', position: 'Accepted Offer BE' },
        // { id: 38, name: 'Phạm Khánh Vy', email: 'vy.pham@candidate.com', phone: '0912000038', position: 'Accepted Offer Designer' },
        // { id: 39, name: 'Lê Trung Nghĩa', email: 'nghia.le@candidate.com', phone: '0912000039', position: 'Accepted Offer DevOps' },
        // { id: 40, name: 'Hoàng Ngọc Linh', email: 'linh.hoang@candidate.com', phone: '0912000040', position: 'Accepted Offer QA' }
      ]
    },
    {
      id: 9,
      name: 'Ứng viên bị loại',
      data: [
        { id: 41, name: 'Nguyễn Văn Tài', email: 'tai.nguyen@candidate.com', phone: '0912000041', position: 'Failed CV Screening' },
        // { id: 42, name: 'Trần Minh Phong', email: 'phong.tran@candidate.com', phone: '0912000042', position: 'Failed Coding Test' },
        // { id: 43, name: 'Phạm Ngọc Hân', email: 'han.pham@candidate.com', phone: '0912000043', position: 'Failed Interview' },
        // { id: 44, name: 'Lê Thành Đạt', email: 'dat.le@candidate.com', phone: '0912000044', position: 'Failed Tech Round' },
        // { id: 45, name: 'Hoàng Thị Nhung', email: 'nhung.hoang@candidate.com', phone: '0912000045', position: 'Failed Culture Fit' }
      ]
    },
    {
      id: 10,
      name: 'Ứng viên từ chối offer',
      data: [
        { id: 46, name: 'Nguyễn Đức Thành', email: 'thanh.nguyen@candidate.com', phone: '0912000046', position: 'Declined Offer (Salary)' },
        // { id: 47, name: 'Trần Thị Bích', email: 'bich.tran@candidate.com', phone: '0912000047', position: 'Declined Offer (Location)' },
        // { id: 48, name: 'Phạm Minh Quân', email: 'quan.pham@candidate.com', phone: '0912000048', position: 'Declined Offer (Remote)' },
        // { id: 49, name: 'Lê Hữu Tài', email: 'tai.le@candidate.com', phone: '0912000049', position: 'Declined Offer (Benefits)' },
        // { id: 50, name: 'Nguyễn Khánh Linh', email: 'linh.nguyen@candidate.com', phone: '0912000050', position: 'Declined Offer (Timing)' }
      ]
    },
    {
      id: 11,
      name: 'Nhận việc',
      data: [
        { id: 51, name: 'Nguyễn Văn Hùng', email: 'hung.nguyen@candidate.com', phone: '0912000051', position: 'Started Frontend Dev' },
        // { id: 52, name: 'Trần Thị Mai Anh', email: 'anh.tran@candidate.com', phone: '0912000052', position: 'Started Designer' },
        // { id: 53, name: 'Lê Đức Duy', email: 'duy.le@candidate.com', phone: '0912000053', position: 'Started Backend Dev' },
        // { id: 54, name: 'Phạm Quốc Bảo', email: 'bao.pham@candidate.com', phone: '0912000054', position: 'Started DevOps Engineer' },
        // { id: 55, name: 'Hoàng Thanh Hà', email: 'ha.hoang@candidate.com', phone: '0912000055', position: 'Started QA Engineer' }
      ]
    }
  ])


  const kanbanColumnMenuPopover = useKanbanColumnMenuPopover()

  kanbanColumnMenuPopover.setup()

  onMounted(() => {
    const el = document.getElementById('kanbanBoard')

    new Sortable(el, {
      animation: 50,
      draggable: '.kanban-column',
      handle: '.kanban-column__stage-name',
      forceFallback: true,
      fallbackClass: 'kanban-drag-shadow',
      chosenClass: 'kanban-chosen',
      filter: '.kanban-column-1',
      preventOnFilter: false,
      onFilter: function (evt) {
        console.log('Phần tử này không được kéo');
      }
    })
  })
</script>

<template>
  <div id="kanban" class="kanban bg-white h-screen flex flex-col">
    <KanbanOverlay />
    <KanbanLoading />
    <KanbanTooltip />
    <KanbanCardMenuPopover />
    <KanbanCandidateForm />
    <KanbanHeader />
    <KanbanCandidateDetailModal />
    <KanbanCandidateCVViewer />

    <main class="w-full flex flex-1 overflow-x-auto p-2 gap-2 relative bg-[#f1f2f4]">
      <div id="kanbanBoard" class="kanban-board flex h-full gap-2">
        <KanbanColumn v-for="stage in stages" :key="stage.id" :stage="stage" :class="`kanban-column-${stage.id}`" />
      </div>

      <KanbanColumnAdd />
    </main>
  </div>
</template>

<style>
  .kanban,
  .kanban *,
  .kanban-tooltip,
  .kanban-select .va-select-option,
  .kanban-date .va-button__content,
  .kanban-date .va-date-picker__header__month {
    font-family: "Inter", sans-serif !important;
  }

  .kanban-select,
  .kanban-date {
    border-radius: 8px;
    box-shadow: 0px 1px 1px #1e1f2140, 0px 0px 1px #1e1f214f;
    font-size: 14px;
    color: #292a2e;
    z-index: 1050 !important;
  }

  .kanban-select .va-select-option-list {
    outline: none;
  }

  .kanban-badge--blue .va-badge__text-wrapper {
    padding: 0 2px;
    border: none;
    border-radius: 4px;
    color: #1868db !important;
    background-color: #e9f2fe !important;
  }

  .kanban-field--size-xs .va-input-wrapper__field {
    height: 28px;
    min-height: 28px;
  }

  .kanban-field--size-md .va-input-wrapper__field {
    height: 30px;
    min-height: 30px;
  }

  .kanban input::placeholder {
    color: #8c8f97;
    font-weight: 600;
    font-size: 13px;
  }

  .kanban .va-input-wrapper__text {
    font-weight: 500;
    color: #292a2e;
  }

  .kanban .va-input-wrapper__field {
    border-radius: 6px;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  .kanban .va-file-upload {
    border: 1px dashed rgba(17, 24, 39, 0.25);
    background-color: transparent !important;
  }

  .kanban .va-file-upload-list-item {
    height: 48px;
    box-shadow: none;
    border-radius: 8px;
    border: 1px solid #0b120e24;
    padding: 0 12px;
  }

  .kanban .va-file-upload-list-item__name,
  .kanban .va-file-upload-list-item__size {
    color: #505258;
    font-weight: 500;
    font-size: 14px;
  }

  .kanban-drag-shadow {
    transform: rotate(8deg);
    cursor: grabbing;
    opacity: 0.8;
  }

  .kanban-chosen {
    position: relative;
  }

  .kanban-chosen::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.16);
    z-index: 100;
    border-radius: inherit;
  }

  .kanban-scroll {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 4px 6px 0 4px;
    min-height: 36px;
  }

  @supports (scrollbar-width: thin) {
    .kanban-scroll {
      scrollbar-width: thin;
      scrollbar-color: #c5c8c9 #e3e5e8;
    }
  }

  @supports selector(::-webkit-scrollbar) {
    .kanban-scroll::-webkit-scrollbar {
      width: 6px;
      background: #e3e5e8;
    }

    .kanban-scroll::-webkit-scrollbar-track {
      background: #e3e5e8;
    }

    .kanban-scroll::-webkit-scrollbar-thumb {
      background: #c5c8c9;
      border-radius: 12px;
    }

    .kanban-scroll:hover::-webkit-scrollbar-thumb {
      background: #9ea3a6;
    }
  }
</style>
