<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import BigFooter from './components/BigFooter.vue'
  import MyModal from './components/MyModal.vue'
  import Home from './components/Home.vue'

  //----------------------------------
  export default {
    components: {
      Header,
      Footer,
      BigFooter,
      MyModal,
      Home
    },
    data() {
      return {
        vH1: "C'est l'App 1",
        price: 0,
        painting: [
          "src/assets/images/painting1.jpg",
          "src/assets/images/painting2.jpg",
          "src/assets/images/painting3.jpg"
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
        testAnim: false,
        currentFooter:'Footer',
        showModal: false
      }
    },
    provide(){
      return {
        messageFooter: this.vH1
      }
    },
    props:{
    },
    methods: {
      changeImg(arrayImgSrc, indexImage){
        // méthode avec index en propriété dynamique pour changer l'image
        // à utiliser si on a plusieurs tableaux d'image et plusieurs index<br/>
        // exemple d'utilisation : changeImgIdx(painting, 'index')
        this[indexImage] = this[indexImage] < (arrayImgSrc.length - 1) ? this[indexImage] + 1 : 0;
      },
      changeFond(mot){
        //bascule la classe
        document.body.classList.toggle('dark');
        // bascule le mot dans le titre
        const h1 = document.querySelector("h1");
        if (document.body.classList.contains('dark')) {
          h1.textContent += ", " + mot;
        }else{
          h1.textContent = h1.textContent.replace(", " + mot, '');
        }
      },
      changeFooter(){
        this.currentFooter = this.currentFooter === 'Footer' ? 'BigFooter' : 'Footer';
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

<!-- :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->

<template>
  <Header @clic-header="changeFond($event)" :mon-logo='painting[2]' />
  <h1>{{vH1}}</h1>
  <Home>
    <p>
      Chabada
    </p>
    <template v-slot:welcome>
      <h3>
        Bienvenue les cocos
      </h3>
    </template>
  </Home>
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
    <button @click="testAnim = !testAnim">Clic</button>
  </div>

  <h2>Modale et Teleport</h2>
  <button id="show-modal" @click="showModal = true">Modale</button>
  <teleport to="body">
    <MyModal :show="showModal" @close="showModal = false" />
  </teleport>

  <h2>Composants Dynamiques</h2>
  <button @click="changeFooter()">Changer le footer</button>
  <component :is="currentFooter"></component>

</template>

<style scoped lang="scss">
  @use '@/assets/styles/components/accueil.scss';
</style>
