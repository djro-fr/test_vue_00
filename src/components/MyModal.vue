<script>
export default {
  data() {
    return {
    }
  },
  props:{
    show: Boolean
  },
  methods: {
  }
}
</script>
<template>
  <!-- MODALE -->
  <transition name="modal">
    <div v-if="show" class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">
            Blabla
            </div>
            <div class="modal-footer">
                <p class="modal-default-button" @click="$emit('close')">OK</p>
            </div>
        </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/components/modale.scss';
</style>
