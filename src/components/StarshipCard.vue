<template>
    <div class="card">
      <h3>{{ ship.name }}</h3>
      <p><strong>Modelo:</strong> {{ ship.model }}</p>
      <p><strong>Fabricante:</strong> {{ ship.manufacturer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarshipCard',
    props: { ship: Object }
  };
  </script>
  
  <style scoped>
  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px;
    width: 300px;
    margin: 10px;
  }
  </style>