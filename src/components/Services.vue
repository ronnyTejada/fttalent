<template>
  <section class="hero grey-light is-fullheight">
    <div class="hero-body has-text-centered is-flex is-flex-direction-column">
      <p class="title">Servicios</p>
      <p class="subtitle">Servicios especializados en cada area</p>

      <div class="columns" style="margin-top: 5%">
        <div class="column">
                    <transition name="slide-fade">

          <div class="card" v-if="show">
            <header class="card-header">
              <p class="card-header-title">búsqueda de empleo</p>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                Nos encargamos de conectarte con las mejores empresas en tu area
                profesional, Nunca ha sido tan facil conseguir empleo
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Contratar</a>
            </footer>
          </div>
                    </transition>
        </div>
        <div class="column">
          <transition name="slide-fade">
            <div class="card" v-if="show">
              <header class="card-header">
                <p class="card-header-title">gestión de talento humano</p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  Asesoramos y brindamos capacitacion para tus empleados,
                  contamos con los mejores especialistas en esta area
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Contratar</a>
              </footer>
            </div>
          </transition>
        </div>
        <div class="column">
          <transition name="slide-fade">
            <div class="card" v-if="show">
              <header class="card-header">
                <p class="card-header-title">
                  asesoría estratégica empresarial
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  Te acompanamos en el camino hacia el crecimiento y
                  escalabilidad de tu empresa, ve de 0 a 100 con nosotros
                </div>
              </div>

              <footer class="card-footer">
                <a href="#" class="card-footer-item">Contratar</a>
              </footer>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: hsl(0, 0%, 93%);
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
export default {
  name: "Talento",
  props: {
    msg: String,
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {},
  mounted() {
    this.show = true;
  },
};
</script>
