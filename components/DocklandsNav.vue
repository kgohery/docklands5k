<template>
  <div id="nav">
    <div id="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="links">
      <a @click="toggleMenu($event)" href="#top"><h2>Home</h2></a>
      <a @click="toggleMenu($event)" href="#race"><h2>Race</h2></a>
      <a @click="toggleMenu($event)" href="#route"><h2>Route</h2></a>
      <a @click="toggleMenu($event)" href="#race-day">
        <h2>Race Day Information</h2>
      </a>
      <a @click="toggleMenu($event)" href="#faq"><h2>FAQ</h2></a>
      <a @click="toggleMenu($event)" href="#sponsors"><h2>Sponsors</h2></a>
      <!--
      <a
        href="https://register.primoevents.com/ps/event/Docklands5K2019"
        target="_blank"
      >
        <h2>Register Now</h2>
      </a>
      -->
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu(e) {
      document.querySelector('#nav #hamburger').classList.toggle('open')
      document.querySelector('#nav .links').classList.toggle('open')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/css/_vars';

.nav-container {
  width: 100%;
  height: 100%;
  z-index: 999;
}

.links {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $primary;
  opacity: 0.9;
  z-index: 1;

  &.open {
    display: block;
  }
}

#hamburger {
  position: fixed;
  top: 2em;
  left: 2em;
  width: 60px;
  height: 45px;
  margin: 0;
  z-index: 999;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#hamburger span {
  display: block;
  position: absolute;
  height: 9px;
  width: 50%;
  background: $highlight;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#hamburger span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#hamburger span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#hamburger span:nth-child(1),
#hamburger span:nth-child(2) {
  top: 0px;
}

#hamburger span:nth-child(3),
#hamburger span:nth-child(4) {
  top: 18px;
}

#hamburger span:nth-child(5),
#hamburger span:nth-child(6) {
  top: 36px;
}

#hamburger.open span:nth-child(1),
#hamburger.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburger.open span:nth-child(2),
#hamburger.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#hamburger.open span:nth-child(1) {
  left: 5px;
  top: 7px;
}

#hamburger.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

#hamburger.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#hamburger.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#hamburger.open span:nth-child(5) {
  left: 5px;
  top: 29px;
}

#hamburger.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 29px;
}
</style>
