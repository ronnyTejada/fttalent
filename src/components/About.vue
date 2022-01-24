<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-flex ">
      <div class="">
        <p class="title">los mejores en recursos humanos</p>
        <p class="subtitle" >
          Nuestros servicios se diferencian por la atención personalizada que le
          brindamos a cada uno de nuestros clientes, nos enfocamos en cumplir
          los objetivos y dar más allá de los resultados esperados. En esta
          sección podrás conocer más de todo lo que te ofrecemos en Fast Track
          Talent
        </p>
      </div>
      <transition name="fade">
        <div v-if="show">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/06/15/50/business-4677631_960_720.jpg"
            alt=""
          />
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
