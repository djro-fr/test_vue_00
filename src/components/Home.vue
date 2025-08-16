<script>
export default {
  data() {
    return {
    }
  },
  props:{
  },
  methods: {
  }
}
</script>
<template>
    <br/>
    <br/>
    <h2>H.O.M.E</h2>
    <slot name="welcome"></slot>
    <slot></slot>
    <br/>
    <br/>
    <br/>

</template>


<style scoped lang="scss">
@use '@/assets/styles/components/footer.scss';
</style>
