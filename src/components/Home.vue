<template>
  <section class="hero is-fullheight">
    

    <!-- Hero head: will stick at the top -->
    <div class="hero-head"></div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <transition name="slide-fade">
          <p class="title" v-if="show">
            Solo dos minutos te separan de tu proximo empleo
          </p>
        </transition>

        
        <button class="button is-success" @click="postula">
          Postulate Ahora
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "HelloWorld",

  props: {
    msg: String,
  },
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    postula() {
      Swal.fire({
        title: "Postulate",
        html: `<p>Coloca tu correo y te enviaremos las instrucciones</p>
        <input type="email" id="login" class="swal2-input" placeholder="ejemplo@ejemplo.com">`,
        confirmButtonText: "Enviar",
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector("#login").value;
        
          if (!login) {
            Swal.showValidationMessage(`Por favor agrega un correo`);
          }
          return { login: login};
        },
      }).then(() => {
        Swal.fire({
          
          icon: "success",
          title: "Te enviaremos un correo",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hero {
  background-color: rgba(3, 3, 3, 0.73);
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg");

  background-repeat: no-repeat, repeat;
  background-position: center; /* Center the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

#particles-js {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

a {
  color: #94f899;
}

.hero-body {
  color: red !important;
}

.title,
.subtitle {
  color: #94f899;
}
</style>
