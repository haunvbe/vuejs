<script setup lang="ts">
  import { computed } from 'vue'

  type Button = {
    size?: string
    color?: string
    bgColor?: string
    rounded?: string
    fontSize?: string
    fontWeight?: string
    focusVisible?: string
    hover?: string
    shadow?: string
    align?: string
    transition?: string
    type?: 'button' | 'submit' | 'reset'
  }

  const {
    size = 'px-3.5 py-2.5',
    color = 'text-white',
    bgColor = 'bg-[#1868db]',
    rounded = 'rounded-md',
    fontSize = 'text-sm',
    fontWeight = 'font-semibold',
    focusVisible = 'focus-visible:outline-2 focus-visible:outline-offset-2',
    hover = 'hover:bg-[#1558bc]',
    shadow = 'shadow-sm',
    align = 'items-center justify-center',
    transition = 'transition-colors',
    type = 'button'
  } = defineProps<Button>()

  const classNames = computed(() => {
    return [
      size,
      color,
      bgColor,
      rounded,
      fontSize,
      fontWeight,
      focusVisible,
      hover,
      shadow,
      align,
      transition
    ].join(' ')
  })
</script>

<template>
  <button
    :type
    :class="classNames"
    class="inline-flex gap-2 disabled:cursor-not-allowed disabled:opacity-90">
    <slot></slot>
  </button>
</template>


