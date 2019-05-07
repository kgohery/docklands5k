<template>
  <div id="sponsors">
    <h2>Sponsors</h2>
    <div class="links">
      <a href="https://www.doylecollection.com/" target="_blank"
        ><img
          src="@/assets/images/sponsors/logo-doyle-collection.png"
          alt="Doyle Collection"
      /></a>
      <a href="https://www.matheson.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-matheson.png" alt="Matheson"
      /></a>
      <a href="https://www.themarkerhoteldublin.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-marker.png" alt="Marker"
      /></a>
      <a href="https://www.kpmg.ie/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-kpmg.png" alt="KPMG"
      /></a>
      <a href="https://www.247meeting.com/" target="_blank"
        ><img
          src="@/assets/images/sponsors/logo-247-meeting.png"
          alt="24/7 Meeting"
      /></a>
      <a href="http://sparbaggotmile.ie/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-spar.png" alt="Spar"
      /></a>
      <a href="http://www.frsltd.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-frs.png" alt="FRS"
      /></a>
      <a href="https://www.pwc.ie/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-pwc.png" alt="PWC"
      /></a>
      <a href="https://www.applegreenstores.com/" target="_blank"
        ><img
          src="@/assets/images/sponsors/logo-applegreen.png"
          alt="Applegreen"
      /></a>
      <a href="https://good4u.co/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-good4u.png" alt="Good4U"
      /></a>
      <a href="https://www.citco.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-citco.png" alt="Citco"
      /></a>
      <a href="http://www.rushfleet.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-rushfleet.png" alt="Rushfleet"
      /></a>
      <a href="https://www.aldautomotive.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-ald.png" alt="ALD Automotive"
      /></a>
      <a href="https://www.lciaviation.com/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-lci.png" alt="LCI"
      /></a>
      <a href="http://www.owenreilly.ie/" target="_blank"
        ><img
          src="@/assets/images/sponsors/logo-owen-reilly.png"
          alt="Owen Reilly"
      /></a>
      <a href="http://www.pitman-training.ie/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-pitman.png" alt="Pitman"
      /></a>
      <a href="https://www.rebalancephysiotherapy.ie/" target="_blank"
        ><img src="@/assets/images/sponsors/logo-rebalance.png" alt="Rebalance"
      /></a>
      <a href="https://www.voltairediamonds.ie/" target="_blank"
        ><img
          src="@/assets/images/sponsors/logo-voltaire.png"
          alt="Voltaire Diamonds"
      /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~assets/css/_vars';

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
  }
}
</style>
