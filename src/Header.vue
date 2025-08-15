<template>
  <header>
    <img class="logo" :src="logo" />
    <p>C'est le header</p>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
  props:{
    logo:{
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
  @use '@/styles/components/header.scss';
</style>
