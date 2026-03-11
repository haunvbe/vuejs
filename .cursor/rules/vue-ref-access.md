# Vue 3 Ref Access Rules

Use Vue 3 Composition API with `<script setup>`.

## Declaring ref with any

When the data type is unknown, use:

const data = ref<any>([])

Avoid:
const data = ref([])
const data = ref<any[]>([])

## Accessing ref values in <script>

When accessing ref variables inside `<script>`, always use `.value`.

Example:

data.value?.attribute
data.value?.items
data.value?.user?.name

Do not access properties directly without `.value`.

Wrong:
data?.attribute
data.attribute

Correct:
data.value?.attribute

## Accessing ref values in <template>

Inside Vue templates, Vue automatically unwraps refs.

Therefore do NOT use `.value`.

Correct:

data?.attribute
data?.items
data?.user?.name

Wrong:

data.value?.attribute

## Optional chaining

Always use optional chaining (`?.`) when accessing properties from `any`.

Example:

data.value?.attribute
data.value?.user?.name

Template:

data?.attribute
data?.user?.name

## Example

<script setup lang="ts">
const loading = ref<boolean>(false)
const data = ref<any>([])

const firstName = computed(() => {
  return data.value?.user?.name
})
</script>

<template>
  <div>
    {{ data?.user?.name }}
  </div>
</template>