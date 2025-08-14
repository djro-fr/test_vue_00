<script>
  export default {
    data() {
      return {
        vH1: "C'est l'App 1",
        price: 0,
        painting: [
          "src/images/painting1.jpg",
          "src/images/painting2.jpg",
          "src/images/painting3.jpg"
        ],
        index:0
      }
    },
    methods: {
      changeImg(arrayImgSrc, indexImage){
        // méthode avec index en propriété dynamique pour changer l'image
        // à utiliser si on a plusieurs tableaux d'image et plusieurs index<br/>
        // exemple d'utilisation : changeImgIdx(painting, 'index')
        this[indexImage] = this[indexImage] < (arrayImgSrc.length - 1) ? this[indexImage] + 1 : 0;
      }
    }
  }
</script>

<template>
  <h1>{{vH1}}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation

    
  </p>
  <div>
    <button v-if="price < 3" @click="price++">
      Le prix est {{price}}
    </button>
    <button v-else @click="price=0" class="vert">
      Le prix est {{price}}. C'est un super chiffre !
    </button>
  </div>
  <img width="500" :src="painting[index]"/>  
  <br/>
  <button @click="changeImg(painting, 'index')">
    n°{{index+1}} : changer
  </button>
</template>

<style scoped lang="scss">
  @use '@/styles/components/cmp_accueil.scss';
</style>