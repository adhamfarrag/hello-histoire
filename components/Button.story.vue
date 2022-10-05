<template>
 <Story>
  <Variant title="default">
    <Button label="Hello" />
  </Variant>
  <Variant title="danger">
    <Button label="Hello" />
  </Variant>
 </Story>
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