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

  type Icon = {
    width?: string
    height?: string
    variant?: 'ellipsis' | 'plus' | 'bars-sort' | 'circle-info' | 'envelope' | 'pen-to-square' | 'close' | 'archive' | 'angle-down'
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
</template>
