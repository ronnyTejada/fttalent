<template>
  <section class="hero grey-light is-fullheight">
    <div class="hero-body has-text-centered is-flex is-flex-direction-column">
      <p class="title">Experiencia</p>
      <p class="subtitle">Empresas con las que hemos trabajado</p>
      <transition name="slide-fade">
        <div class="columns" style="margin-top: 5%" v-if="show">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/c-wm.svg" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-480x480">
                  <img src="../assets/c-ub.svg" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/c-ff.svg" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src="../assets/c-sr.svg" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-color: hsl(0, 0%, 93%);
}

.card .card-image,
.card .card-image .image img {
  height: 200px;
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
  name: "Clientes",
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
