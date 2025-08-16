<script>
export default {
  data() {
    return {
      unMot: 'mirliflore'
    }
  },
  props:{
    monLogo:{
      type: String
    }
  },
  methods: {
    clicHeader(){
      this.$emit("clic-header", this.unMot)
    }
  }
}
</script>
<template>
  <header>
    <img class="logo" :src="monLogo" />
    <p>C'est le header</p>
    <button @click="clicHeader()">clic</button>
  </header>
</template>


<style scoped lang="scss">
@use '@/assets/styles/components/header.scss';
</style>
