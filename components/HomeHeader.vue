<template>
  <div id="top" ref="header">
    <div class="logo-container">
      <img
        src="@/assets/images/logo-white.png"
        class="logo"
        alt="Docklands 5k logo"
      />
    </div>
    <div class="content">
      <h3>Thursday June 15th @ 7.45pm</h3>

      <!--<div class="instructions">
        <h3>
          <a
            href="https://docs.google.com/document/d/1kpH883cvk1JbXcxhX87MiO-4s4xvpZgkB8KsyKYksLM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            >Race Instructions</a
          >
        </h3>
      </div>
      -->
      <!-- <div class="instructions">
        <h3>
          <a
            href="https://www.myrunresults.com/events/docklands_5k_2022/4426/details"
            target="_blank"
            >Register Now</a
          >
        </h3>
      </div> -->
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
  name: 'HomeHeader',
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  mounted() {
    this.resizeLanding();
    window.addEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      // Debounce the resize call
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.resizeLanding();
      }, 250);
    },
    resizeLanding() {
      this.$refs.header.style.height = window.innerHeight + 'px';
    },
  },
};
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

  .logo-container {
    width: 60%;
    text-align: center;
    padding-bottom: 50px;
    .logo {
      width: 90%;
    }
  }

  .content {
    width: 80%;
    text-align: center;
    .logo {
      width: 90%;
    }
  }

  @media screen and (max-width: $break-medium - 1) {
    background-image: url(~assets/images/runners-2016-l.jpg);
  }
  @media screen and (min-width: $break-medium) and (max-width: $break-large - 1) {
    background-image: url(~assets/images/runners-2016-l.jpg);
    .logo-container {
      width: 100%;
    }
  }
  @media screen and (min-width: $break-large) {
    background-image: url(~assets/images/runners-2016-l.jpg);
  }

  @media screen and (max-width: $break-medium - 1) {
    .logo-container {
      width: 100%;
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
