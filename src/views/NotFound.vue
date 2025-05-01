<template>
    <div class="not-found">
      <h2>Página no encontrada</h2>
      <p>Revisa la URL o vuelve al <router-link to="/">inicio</router-link>.</p>
    </div>
  </template>
  
  <script>
  export default { name: 'NotFound' };
  </script>
  
  <style scoped>
  .not-found { padding: 20px; text-align: center; }
  </style>