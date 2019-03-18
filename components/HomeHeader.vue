<template>
  <div ref="header" class="header">
    <div class="content">
      <img
        src="@/assets/images/logo-white.png"
        class="logo"
        alt="Docklands 5k logo"
      />
      <h3>Thursday June 20th 2019</h3>
      <div id="bouncing-arrow">
        <a href="#race" class="nav" @click="scrollTo">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com/crusaders5k" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/docklands5k" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/docklands5k" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocklandsHeader',

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize)
  },

  mounted() {
    this.resizeLanding()
    window.addEventListener('resize', this.onWindowResize)
  },

  methods: {
    onWindowResize() {
      // Debounce the resize call
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.resizeLanding()
      }, 250)
    },
    resizeLanding() {
      this.$refs.header.style.height = window.innerHeight + 'px'
    },
    scrollTo(e) {
      e.preventDefault()
      console.log(e.currentTarget)
      // if (
      //   location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
      //   location.hostname == this.hostname
      // ) {
      //   var target = $(this.hash);
      //   if (history.pushState) {
      //     history.pushState(null, null, this.hash);
      //   }

      //   // toggle the menu
      //   if ($(this).hasClass("menu")) {
      //     // hide the hamburger menu
      //     $(".cmn-toggle-switch").click();
      //   }

      //   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      //   if (target.length) {
      //     $('html,body').animate({
      //         scrollTop: target.offset().top
      //       }, 500, function() {
      //         window.location.hash = target.selector;
      //       });
      //     return false;
      //   }
      // }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/css/_vars';
@keyframes bounce {
  50% {
    transform: translate(0px, -15px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.header {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-top: solid 5px #8cc63f;

  @media screen and (max-width: $break-medium - 1) {
    background-image: url(~assets/images/runners-2016-s.jpg);
  }
  @media screen and (min-width: $break-medium) and (max-width: $break-large - 1) {
    background-image: url(~assets/images/runners-2016-m.jpg);
  }
  @media screen and (min-width: $break-large) {
    background-image: url(~assets/images/runners-2016-l.jpg);
  }

  #bouncing-arrow {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
    font-size: 6em;
    animation: bounce 3s infinite;

    i {
      color: $white;
    }
  }

  .social-links {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 4em;
    @media (max-width: $break-medium - 1) {
      font-size: 3em;
    }

    .fa {
      padding: 0 0 0 10px;
    }
  }
}
</style>
