<template>
  <div id="sponsors">
    <h2>Sponsors</h2>

    <h4>
      We would like to acknowledge the generous race sponsorship from the
      following companies:
    </h4>

    <div class="links">
      <!-- <a href="https://www.waystone.com/" target="_blank" class="primary">
        <img src="@/assets/images/sponsors/logo-waystone.png" alt="Waystone" />
      </a> -->

      <!-- <a href="http://www.frsltd.com/" target="_blank">
        <img src="@/assets/images/sponsors/logo-frs.png" alt="FRS" />
      </a> -->

      <!-- <a href="https://www.applegreenstores.com/" target="_blank">

        <img
          src="@/assets/images/sponsors/logo-applegreen.png"
          alt="Applegreen"
        />

      </a> -->

      <a href="http://www.rushfleet.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-rushfleet.png"
          alt="Rushfleet"
        />
      </a>

      <!-- <a href="https://www.voltairediamonds.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-voltaire.png"
          alt="Voltaire Diamonds"
        />
      </a> -->

      <!-- <a href="https://www.capitaldockresidence.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-capital-dock.png"
          alt="Capital Dock"
        />
      </a> -->

      <!-- <a href="https://www.aldautomotive.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-ald.png"
          alt="ALD Automotive"
        />
      </a> -->

      <a href="https://www.doylecollection.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-doyle-collection.png"
          alt="Doyle Collection"
        />
      </a>

      <!-- <a href="https://www.citco.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-citco.png"
          alt="Citco"
        />
      </a> -->

      <!-- <a href="https://www.pitman-training.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-pitman.png"
          alt="Pitman"
        />
      </a> -->

      <!-- <a href="https://www.owenreilly.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-owen-reilly.png"
          alt="Owen Reilly"
        />
      </a> -->

      <a href="https://www.pwc.ie/" target="_blank">
        <img src="@/assets/images/sponsors/logo-pwc.png" alt="PWC" />
      </a>

      <!-- <a href="https://runzone.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-runzone.png"
          alt="Runzone"
        />
      </a> -->

      <a href="https://everards.ie/" target="_blank">
        <img src="@/assets/images/sponsors/logo-everards.png" alt="Everards" />
      </a>

      <a href="https://www.risksystem.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-risk-system.png"
          alt="Risk System"
        />
      </a>

      <a href="https://www.theaddresscollective.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-address-collective.png"
          alt="The Address Collective"
        />
      </a>

      <!-- <a href="https://www.mcgettiganscookhouse.ie/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-mcgettigans.png"
          alt="McGettigans Cookhouse"
        />
      </a> -->

      <!-- <a href="https://www.airbus.com/" target="_blank">
        <img
          src="@/assets/images/sponsors/logo-airbus.png"
          alt="Airbus"
        />
      </a> -->
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
