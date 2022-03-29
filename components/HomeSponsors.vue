<template>
  <div id="sponsors">
    <h2>Sponsors</h2>

    <h4>
      We would like to acknowledge the generous race sponsorship from the
      following companies:
    </h4>

    <div class="links">
      <a href="http://www.frsltd.com/" target="_blank">
        <img src="@/assets/images/sponsors/logo-frs.png" alt="FRS" />
      </a>

      <a href="https://www.applegreenstores.com/" target="_blank">

        <img
          src="@/assets/images/sponsors/logo-applegreen.png"
          alt="Applegreen"
        />

      </a>

      <a href="http://www.rushfleet.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-rushfleet.png"
          alt="Rushfleet"
        />
      </a>

      <a href="https://www.voltairediamonds.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-voltaire.png"
          alt="Voltaire Diamonds"
        />
      </a>

      <a href="https://www.capitaldockresidence.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-capital-dock.png"
          alt="Capital Dock"
        />
      </a>

      <a href="https://www.aldautomotive.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-ald.png"
          alt="ALD Automotive"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default { name: 'HomeSponsors' };
</script>

<style scoped lang="scss">
@import '~assets/css/_vars';
h4,
p {
  background: $primary;
  color: $white;
  margin: 0;
  text-align: center;
}
.links {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  background: $primary;

  a {
    text-align: center;
    width: 33.33%;

    @media screen and (max-width: $break-medium - 1) {
      width: 50%;
    }

    img {
      width: 90%;
    }

    &.primary {
      width: 70%;
    }
  }
}
</style>
