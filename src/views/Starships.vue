<script setup>
import { ref, onMounted } from 'vue';
import * as bootstrap from 'bootstrap';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import StarshipCard from '../components/StarshipCard.vue';

const ships = ref([]);
const featured = ref([]);
const loading = ref(true);
const error = ref(false);
const errorMessage = ref('');

// Información estática para carrusel: imagen y descripción (4 líneas cada)
const featuredData = [
  {
    name: 'Millennium Falcon',
    image: 'https://a-static.besthdwallpaper.com/star-wars-millennium-falcon-wallpaper-2880x1800-60522_8.jpg',
    description: [
      'Una YT-1300 modificada, propiedad de Han Solo.',
      'Destaca por su velocidad y maniobrabilidad.',
      'Participó en la Batalla de Yavin y Endor.',
      'Apodada “la hechicera veloz del Corellia”.'
    ]
  },
  {
    name: 'X-wing',
    image: 'https://c4.wallpaperflare.com/wallpaper/357/460/968/star-wars-x-wing-wallpaper-preview.jpg',
    description: [
      'Caza estelar estandar de la Alianza Rebelde.',
      'Equipo de torpedos y cañones láser.',
      'Famoso por su rol en Yavin IV.',
      'Capaz de modo de ráfaga de fuego.'
    ]
  },
  {
    name: 'TIE Fighter',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/TIE-Fighter-Facts-Featured.jpg',
    description: [
      'Caza rápido del Imperio Galáctico.',
      'Sin escudos deflector, liviano y ágil.',
      'Utiliza droides astromecánicos sacrificables.',
      'Emite característico sonido de motor.'
    ]
  },
  {
    name: 'Star Destroyer',
    image: 'https://i.pinimg.com/736x/30/d4/bd/30d4bd140f158fe10c85781d92267d60.jpg',
    description: [
      'Crucero capital del Imperio.',
      'Armamento masivo y hangares internos.',
      'Intimida sistemas enteros con su presencia.',
      'Emblema de la hegemonía imperial.'
    ]
  },
  {
    name: 'A-wing',
    image: 'https://c4.wallpaperflare.com/wallpaper/879/683/815/star-wars-science-fiction-star-wars-ships-a-wing-artwork-hd-wallpaper-preview.jpg',
    description: [
      'Caza interceptora de alta velocidad.',
      'Marco angular y motor trasero dorsal.',
      'Manejarlo requiere reflejos de un droide.',
      'Usado en misiones de reconocimiento.'
    ]
  }
];

// Inicializar carrusel y cargar datos
onMounted(() => {
  const cs = document.querySelector('#starshipCarousel');
  new bootstrap.Carousel(cs, { interval: 5000, ride: 'carousel' });

  (async () => {
    try {
      const resp = await fetch('https://www.swapi.tech/api/starships/');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const list = await resp.json();
      const details = await Promise.all(
        list.results.map(i => fetch(i.url).then(r => r.json()))
      );
      ships.value = details.map(d => ({
        uid: d.result.uid,
        name: d.result.properties.name,
        model: d.result.properties.model,
        manufacturer: d.result.properties.manufacturer,
      
        
      }));
      featured.value = featuredData;
    } catch (e) {
      error.value = true;
      errorMessage.value = e.message;
    } finally {
      loading.value = false;
    }
  })();
});
</script>

<template>
  <div id="app" class="full-bg text-light">
    <div class="container py-5">
      <h2 class="text-center mb-4">Naves Destacadas</h2>
      <div class="d-flex justify-content-center">
        <div id="starshipCarousel" class="carousel slide carousel-custom" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(item, idx) in featured"
              :key="idx"
              :class="['carousel-item', { active: idx === 0 }]"
            >
              <img :src="item.image" class="d-block w-100 rounded" :alt="item.name" />
              <div class="carousel-caption bg-dark bg-opacity-75 rounded p-3 description-box">
                <h5>{{ item.name }}</h5>
                <p v-for="(line, i) in item.description" :key="i">{{ line }}</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#starshipCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#starshipCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <h2 class="text-center mt-5 mb-4">Lista Completa</h2>
      <div class="text-center" v-if="loading">
        <LoadingSpinner />
      </div>
      <p v-else-if="error" class="text-danger text-center">Error: {{ errorMessage }}</p>
      <div v-else class="d-flex flex-wrap justify-content-center gap-4">
        <div
          v-for="ship in ships"
          :key="ship.uid"
          class="card starship-card position-relative"
        >
          
          <div class="card-body">
            <h5 class="card-title">{{ ship.name }}</h5>
            <p class="card-text mb-0">Modelo: {{ ship.model }}</p>
            <p class="card-text">Fabricante: {{ ship.manufacturer }}</p>
          </div>
          <div class="card-overlay">
            <div class="overlay-content">
              <p v-for="(line, idx) in ship.description" :key="idx">{{ line }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
}
.full-bg {
  background: #000;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 20px 20px;
  min-height: 100vh;
}
.carousel-custom {
  max-width: 80%;
}
.description-box p {
  margin: 0;
  font-size: 0.9rem;
}
.starship-card {
  width: 300px;
  background-color: #000;
  color: #fff;
  border: 1px solid #444;
  overflow: hidden;
  cursor: pointer;
}
.starship-card .card-body {
  background-color: #000;
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.starship-card:hover .card-overlay {
  opacity: 1;
}
.overlay-content p {
  font-size: 0.85rem;
  line-height: 1.2;
  margin: 0.2rem 0;
}
</style>
