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
        index:0,
        semaine: [
          "lundi",
          "mardi",
          "mercredi",
          "jeudi",
          "vendredi",
          "samedi",
          "dimanche"
        ],
        gens: new Set([
          "Pierre", "Paul", "Jacques"
        ]),
        couleurs: [
          {type: "primaire", nom: "rouge", teinte: "#ff2424"},
          {type: "primaire", nom: "jaune", teinte: "#fff347"},
          {type: "primaire", nom: "bleu", teinte: "#141cff"},
          {type: "secondaire", nom: "orange", teinte: "#ff9214"},
          {type: "secondaire", nom: "vert", teinte: "#00c724"},
          {type: "secondaire", nom: "violet", teinte: "#a800d6"}
        ],
        promo:"",
        promo2:"",
        promoMsg:"",
        prenom: 'Jose',
        nom:'Garcia',
        testClassColor:'',
        showTr: false,
        testAnim:false
      }
    },
    methods: {
      changeImg(arrayImgSrc, indexImage){
        // méthode avec index en propriété dynamique pour changer l'image
        // à utiliser si on a plusieurs tableaux d'image et plusieurs index<br/>
        // exemple d'utilisation : changeImgIdx(painting, 'index')
        this[indexImage] = this[indexImage] < (arrayImgSrc.length - 1) ? this[indexImage] + 1 : 0;
      }
    },
    computed:{
      nomComplet(){
        return this.prenom + " " + this.nom;
      }
    },
    watch:{
      promo2(newValue, oldValue){
        if (newValue === 'toto'){
          this.promoMsg =' => formidable'
        }else{
          this.promoMsg =''
        }
      }
    }



  }
</script>

<template>
  <h1>{{vH1}}</h1>
  <div>
    <button v-if="price < 3" @click="price++">
      Le prix est {{price}}
    </button>
    <button v-else @click="price=0" class="vert">
      Le prix est {{price}}. C'est un super chiffre !
    </button>
  </div>
  <img width="500" :src="painting[index]"/>
  <div class="line">
      <button @click="changeImg(painting, 'index')">
        n°{{index+1}} : changer
      </button>
      <p class="info" v-show="index == 2">Ma version préférée !!</p>
      </div>

  <h2>Jours de la semaine</h2>
  <ul v-for="jour in semaine" :key="jour">
    <li>{{ jour }}</li>
  </ul>

  <h2>Les gens</h2>
  <ul v-for="prenom in Array.from(gens)" :key="prenom">
    <li>{{ prenom }}</li>
  </ul>

  <h2>Couleurs primaires</h2>
  <ul v-for="coul in couleurs" :key="coul.nom">
    <li v-if="coul.type === 'primaire'">
      <!--
      En JavaScript, les noms de propriétés d'objet ne peuvent pas contenir de tirets
      On utilise donc l'équivalent du nom de classe CSS mais passé en camelCase
      -->
      {{ coul.nom }} <span class="teinte" :style="{backgroundColor: coul.teinte}"></span>
    </li>
  </ul>

  <h2>Couleurs secondaires</h2>
  <ul v-for="coul in couleurs" :key="coul.nom">
    <li v-if="coul.type === 'secondaire'">
      {{ coul.nom }} <span class="teinte" :style="{backgroundColor: coul.teinte}"></span>
    </li>
  </ul>

  <h2>Code promo 0+0</h2>
  <input v-model="promo" placeholder="code promo" />
  <p v-if="promo === 'toto'">bravo!</p>
  <p v-else>try again!</p>

  <h2>Test Computed</h2>
  <p>{{ nomComplet }}</p>

  <h2>Observateurs</h2>
  <div class="line">
    <input v-model="promo2" placeholder="code promo" />
    <p>{{promoMsg}}</p>
  </div>

  <h2>Test Class</h2>
  <div id="test_class" :class="{red: testClassColor === 'r', yellow: testClassColor === 'y'}">
    <button @click="testClassColor ='r'">Rouge</button>
    <button @click="testClassColor ='y'">Jaune</button>
  </div>

  <h2>Transitions</h2>
  <Transition name="slide-fade">
    <p v-if="showTr">hello</p>
  </Transition>
  <button @click="showTr = !showTr">Clic</button>

  <h2>Animations</h2>
  <div id="transi">
    <Transition name="bounce">
      <p v-if="testAnim">hello</p>
    </Transition>
    </div>
  <button @click="testAnim = !testAnim">Clic</button>







</template>

<style scoped lang="scss">
  @use '@/styles/components/cmp_accueil.scss';
</style>
