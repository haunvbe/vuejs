<script setup lang="ts">
  import EllipsisIcon from './icons/EllipsisIcon.vue'
  import PlusIcon from './icons/PlusIcon.vue'
  import BarsSortIcon from './icons/BarsSortIcon.vue'
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
  import AngleLeft from './icons/AngleLeft.vue'
  import TrashIcon from './icons/TrashIcon.vue'
  import BellIcon from './icons/BellIcon.vue'
  import GlobeIcon from './icons/GlobeIcon.vue'
  import GeistIcon from './icons/GeistIcon.vue'

  type Icon = {
    width?: string
    height?: string
    variant?: 'ellipsis'
    | 'plus'
    | 'bars-sort'
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
    | 'trash'
    | 'bell'
    | 'globe'
    | 'geist'
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
  <BarsSortIcon v-else-if="variant === 'bars-sort'" :width :height />
  <EnvelopeIcon v-else-if="variant === 'envelope'" :width :height />
  <PenToSquareIcon v-else-if="variant === 'pen-to-square'" :width :height />
  <CloseIcon v-else-if="variant === 'close'" :width :height />
  <ArchiveIcon v-else-if="variant === 'archive'" :width :height />
  <AngleDownIcon v-else-if="variant === 'angle-down'" :width :height />
  <UserGroupIcon v-else-if="variant === 'user-group'" :width :height />
  <CircleQuestionIcon v-else-if="variant === 'circle-question'" :width :height />
  <ChartKanbanIcon v-else-if="variant === 'chart-kanban'" :width :height />
  <CopyIcon v-else-if="variant === 'copy'" :width :height />
  <AngleLeft v-else-if="variant === 'angle-left'" :width :height />
  <TrashIcon v-else-if="variant === 'trash'" :width :height />
  <BellIcon v-else-if="variant === 'bell'" :width :height />
  <GlobeIcon v-else-if="variant === 'globe'" :width :height />
  <GeistIcon v-else-if="variant === 'geist'" :width :height />
</template>
