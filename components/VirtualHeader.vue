<template>
  <div id="top" ref="header">
    <div class="content">
      <img
        src="@/assets/images/logo-indeed-white.png"
        class="logo"
        alt="Docklands 5k logo"
      />
      <h3>2020 Docklands Virtual race</h3>
      <h3>July 3rd-9th 2020</h3>
      <div class="instructions">
        <h3>
          <a
            href="https://www.myrunresults.com/events/docklands_virtual_5k/3944"
            target="_blank"
            rel="noopener noreferrer"
            >Enter Now!</a
          >
        </h3>
      </div>

      <div class="social-links">
        <a href="https://www.facebook.com/crusaders5k" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/docklands5k" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/IndeedDocklands5k" target="_blank">
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

#top {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-top: solid 5px $highlight;

  .content {
    width: 80%;
    text-align: center;
    .logo {
      width: 65%;
    }
  }

  @media screen and (max-width: $break-medium - 1) {
    background-image: url(~assets/images/runners-2016-l.jpg);
  }
  @media screen and (min-width: $break-medium) and (max-width: $break-large - 1) {
    background-image: url(~assets/images/runners-2016-l.jpg);
    .content {
      .logo {
        width: 80%;
      }
    }
  }
  @media screen and (min-width: $break-large) {
    background-image: url(~assets/images/runners-2016-l.jpg);
  }

  @media screen and (max-width: $break-medium - 1) {
    .content {
      .logo {
        width: 100%;
      }
    }
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

  .instructions {
    display: inline-block;
    border: solid 5px $white;
    margin: 1em;
    padding: 1em;

    h3 a {
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
