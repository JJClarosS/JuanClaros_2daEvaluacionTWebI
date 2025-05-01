<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
        <span>Portal Swapi Star Wars</span>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/starships">Starships</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default { name: 'Navbar' };
  </script>
  
  <style scoped>
  .navbar {
    background: #222;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    list-style: none;
    display: flex;
  }
  .nav-links li {
    margin-left: 15px;
  }
  .nav-links a {
    color: #fff;
  }
  </style>