<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Navbar, Footer }
};
</script>

<style>
/* Estilos globales del layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>