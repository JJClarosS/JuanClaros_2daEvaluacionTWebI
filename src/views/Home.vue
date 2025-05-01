<template>
  <div id="home" class="full-bg text-light d-flex flex-column align-items-center justify-content-start">
    <div class="crawl-wrapper mt-5">
      <div class="crawl">
        <h1>Star Wars</h1>
        <p>
          En los confines digitales de una galaxia codificada,<br />
          desarrolladores rebeldes forjaron una API secreta.<br />
          Esta fuente de datos, conocida como SWAPI,<br />
          guarda los secretos de las naves más legendarias.<br /><br />

          Con valor y precisión, los Jedi del código<br />
          conectaron con esta base galáctica, extrayendo modelos,<br />
          fabricantes y nombres que surcan el espacio estelar.<br /><br />

          Esta aplicación es el fruto de esa alianza.<br />
          Cada nave fue ensamblada pieza por pieza,<br />
          trayendo a la luz conocimiento olvidado.<br />
          ¡Que la Fuerza del backend te acompañe!
        </p>
      </div>
    </div>

    <div class="container mt-5 pt-5 w-100">
      <div id="homeCarousel" class="carousel slide carousel-custom" data-bs-ride="carousel">
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img src="https://images7.alphacoders.com/111/1115515.jpg" class="d-block w-100" alt="La Amenaza Fantasma" />
          </div>
          <div class="carousel-item">
            <img src="https://images3.alphacoders.com/111/thumb-1920-1115520.jpg" class="d-block w-100" alt="Una Nueva Esperanza" />
          </div>
          <div class="carousel-item">
            <img src="https://www.avforums.com/styles/avf/editorial/block//b196b1bf33786859f0414d4f81eda6d8_3x3.jpg" class="d-block w-100" alt="Return of the Jedi" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.full-bg {
  min-height: 100vh;
  background: #000;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 20px 20px;
  overflow: hidden;
  position: relative;
}

.crawl-wrapper {
  width: 70%;
  max-width: 900px;
  perspective: 600px;
  z-index: 10;
  margin-bottom: 2rem;
  height: 350px;
  overflow: hidden;
  position: relative;
}

.crawl {
  color: yellow;
  font-family: 'Arial Black', sans-serif;
  font-size: 1.6rem;
  text-align: center;
  animation: crawl 60s linear infinite;
  transform-origin: bottom center;
  line-height: 1.8;
  position: absolute;
  bottom: -100%;
}

@keyframes crawl {
  0% {
    transform: rotateX(25deg) translateZ(0) translateY(100%);
    opacity: 1;
  }
  100% {
    transform: rotateX(25deg) translateZ(-300px) translateY(-300%);
    opacity: 0;
  }
}

.carousel-custom {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 8rem;
}

.carousel img {
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>

