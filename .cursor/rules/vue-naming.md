# Vue State Naming Rules

Use Vue 3 Composition API with TypeScript.

## Ref variables

Always declare ref variables with explicit TypeScript types.

Example:

const loading = ref<boolean>(false)
const data = ref<any[]>([])
const error = ref<string | null>(null)

## Naming conventions

Use the following variable naming patterns:

Loading states:
loading
isLoading
isSubmitting

Boolean states:
isVisible
isOpen
isActive
hasError

Lists:
users
jobs
candidates
items
data

Single object:
user
job
candidate
item

Form data:
formData

Pagination:
page
pageSize
total

## Ref initialization rules

Boolean:
const loading = ref<boolean>(false)

Array:
const items = ref<any[]>([])

Object:
const data = ref<Record<string, any> | null>(null)

String:
const keyword = ref<string>('')

Number:
const page = ref<number>(1)

## Avoid

Do not use generic variable names like:
tmp
test
abc
value1
data1

## Preferred structure in components

const loading = ref<boolean>(false)
const items = ref<any[]>([])
const selectedItem = ref<any | null>(null)
const formData = ref<Record<string, any>>({})