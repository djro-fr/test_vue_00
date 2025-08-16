<script>

import FooterChild from './FooterChild.vue'
export default {
  components:{
    FooterChild
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<template>
  <footer>
    <p>footer</p>
    <footer-child></footer-child>
  </footer>
</template>


<style scoped lang="scss">
@use '@/assets/styles/components/footer.scss';
</style>
