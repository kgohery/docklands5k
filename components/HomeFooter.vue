<template>
  <div id="footer">
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
    <div class="copyright">
      &copy;
      <a href="http://www.crusadersac.ie/" target="_blank">Crusaders AC</a> 2019
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~assets/css/_vars';

.footer {
  background: $primary;
  color: $highlight;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;

  .social-links {
    font-size: 2em;
  }
}
</style>
