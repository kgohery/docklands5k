<template>
  <div class="book">
    <!--
    <a
      class="button"
      href="https://register.primoevents.com/ps/event/Docklands5K2019"
      target="_blank"
      >Register Now</a
    >
    -->
  </div>
</template>

<script>
export default { name: 'DocklandsBook' };
</script>

<style scoped lang="scss">
@import '~assets/css/_vars';
.book {
  position: relative;
}

.button {
  position: fixed;
  top: 0;
  right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.2em 1em;
  background: $primary;
  color: $white;
  font-size: 1.5em;
  z-index: 1;
  border: solid 5px $highlight;
  border-top: 0;
  border-radius: 0 0 5px 5px;
}
</style>
