<template>
  <div class="bg-red-500">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    flat: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    label: {
        type: String,
        default: 'Button',
    }
  },
}
</script>