<script setup lang="ts">
  import EllipsisIcon from './icons/EllipsisIcon.vue'
  import PlusIcon from './icons/PlusIcon.vue'
  import DescriptionIcon from './icons/DescriptionIcon.vue'
  import CircleInfoIcon from './icons/CircleInfoIcon.vue'
  import EnvelopeIcon from './icons/EnvelopeIcon.vue'
  import PenToSquareIcon from './icons/PenToSquareIcon.vue'
  import CloseIcon from './icons/CloseIcon.vue'
  import ArchiveIcon from './icons/ArchiveIcon.vue'
  import AngleDownIcon from './icons/AngleDownIcon.vue'
  import UserGroupIcon from './icons/UserGroupIcon.vue'
  import CircleQuestionIcon from './icons/CircleQuestionIcon.vue'
  import ChartKanbanIcon from './icons/ChartKanbanIcon.vue'
  import CopyIcon from './icons/CopyIcon.vue'
  import AngleLeftIcon from './icons/AngleLeftIcon.vue'
  import AngleRightIcon from './icons/AngleRightIcon.vue'
  import TrashIcon from './icons/TrashIcon.vue'
  import BellIcon from './icons/BellIcon.vue'
  import GlobeIcon from './icons/GlobeIcon.vue'
  import GeistIcon from './icons/GeistIcon.vue'
  import CommentIcon from './icons/CommentIcon.vue'
  import UserIcon from './icons/UserIcon.vue'
  import ActivityIcon from './icons/ActivityIcon.vue'
  import HomeIcon from './icons/HomeIcon.vue'
  import Automation from './icons/Automation.vue'
  import AttachmentIcon from './icons/AttachmentIcon.vue'
  import ImageIcon from './icons/ImageIcon.vue'
  import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'
  import FileIcon from './icons/FileIcon.vue'
  import DownloadIcon from './icons/DownloadIcon.vue'
  import ClockIcon from './icons/ClockIcon.vue'
  import CompanyIcon from './icons/CompanyIcon.vue'
  import RepoIcon from './icons/RepoIcon.vue'
  import BookIcon from './icons/BookIcon.vue'
  import TableIcon from './icons/TableIcon.vue'

  type Icon = {
    width?: string
    height?: string
    variant?: 'ellipsis'
    | 'plus'
    | 'description'
    | 'circle-info'
    | 'envelope'
    | 'pen-to-square'
    | 'close'
    | 'archive'
    | 'angle-down'
    | 'user-group'
    | 'circle-question'
    | 'chart-kanban'
    | 'copy'
    | 'angle-left'
    | 'angle-right'
    | 'trash'
    | 'bell'
    | 'globe'
    | 'geist'
    | 'comment'
    | 'user'
    | 'activity'
    | 'home'
    | 'automation'
    | 'attachment'
    | 'image'
    | 'external-link'
    | 'file'
    | 'download'
    | 'clock'
    | 'company'
    | 'repo'
    | 'book'
    | 'table'
  }

  const {
    width = '16',
    height = '16',
    variant
  } = defineProps<Icon>()
</script>

<template>
  <EllipsisIcon v-if="variant === 'ellipsis'" :width :height />
  <PlusIcon v-else-if="variant === 'plus'" :width :height />
  <CircleInfoIcon v-else-if="variant === 'circle-info'" :width :height />
  <DescriptionIcon v-else-if="variant === 'description'" :width :height />
  <EnvelopeIcon v-else-if="variant === 'envelope'" :width :height />
  <PenToSquareIcon v-else-if="variant === 'pen-to-square'" :width :height />
  <CloseIcon v-else-if="variant === 'close'" :width :height />
  <ArchiveIcon v-else-if="variant === 'archive'" :width :height />
  <AngleDownIcon v-else-if="variant === 'angle-down'" :width :height />
  <UserGroupIcon v-else-if="variant === 'user-group'" :width :height />
  <CircleQuestionIcon v-else-if="variant === 'circle-question'" :width :height />
  <ChartKanbanIcon v-else-if="variant === 'chart-kanban'" :width :height />
  <CopyIcon v-else-if="variant === 'copy'" :width :height />
  <AngleLeftIcon v-else-if="variant === 'angle-left'" :width :height />
  <AngleRightIcon v-else-if="variant === 'angle-right'" :width :height />
  <TrashIcon v-else-if="variant === 'trash'" :width :height />
  <BellIcon v-else-if="variant === 'bell'" :width :height />
  <GlobeIcon v-else-if="variant === 'globe'" :width :height />
  <GeistIcon v-else-if="variant === 'geist'" :width :height />
  <CommentIcon v-else-if="variant === 'comment'" :width :height />
  <UserIcon v-else-if="variant === 'user'" :width :height />
  <ActivityIcon v-else-if="variant === 'activity'" :width :height />
  <HomeIcon v-else-if="variant === 'home'" :width :height />
  <Automation v-else-if="variant === 'automation'" :width :height />
  <AttachmentIcon v-else-if="variant === 'attachment'" :width :height />
  <ImageIcon v-else-if="variant === 'image'" :width :height />
  <ExternalLinkIcon v-else-if="variant === 'external-link'" :width :height />
  <FileIcon v-else-if="variant === 'file'" :width :height />
  <DownloadIcon v-else-if="variant === 'download'" :width :height />
  <ClockIcon v-else-if="variant === 'clock'" :width :height />
  <CompanyIcon v-else-if="variant === 'company'" :width :height />
  <RepoIcon v-else-if="variant === 'repo'" :width :height />
  <BookIcon v-else-if="variant === 'book'" :width :height />
  <TableIcon v-else-if="variant === 'table'" :width :height />
</template>
