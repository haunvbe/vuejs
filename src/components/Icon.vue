<script setup lang="ts">
  import EllipsisIcon from './icons/EllipsisIcon.vue'
  import PlusIcon from './icons/PlusIcon.vue'
  import BarsSortIcon from './icons/BarsSortIcon.vue'
  import CircleInfoIcon from './icons/CircleInfoIcon.vue'
  import EnvelopeIcon from './icons/EnvelopeIcon.vue'

  type Icon = {
    width?: string
    height?: string
    variant?: 'ellipsis' | 'plus' | 'bars-sort' | 'circle-info' | 'envelope'
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
</template>
