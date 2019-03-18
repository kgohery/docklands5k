<template>
  <div class="race">
    <h2>Race</h2>
    <div class="content">
      <section>
        <h4>What is it?</h4>
        <p>
          The 2019 race will take place on Thursday, June 20th, starting at
          7:45pm. The distance is 5k, run over a flat, fast loop in Dublin's
          Docklands area. Organised by the runners from Crusaders Athletic Club,
          the Docklands 5k race is held with the help of the generous
          sponsorship, provided by many companies located in the Docklands and
          surrounding areas.
        </p>
        <p>
          The Docklands 5k is a non-profit event. All proceeds will be used to
          improve the facilities of Crusaders AC and to promote sport, health
          and wellbeing in the community.
        </p>
        <p>
          We look forward to seeing you there!!
        </p>
      </section>
      <section>
        <h4>Race Format</h4>
        <p>
          Entry is open to runners of all abilities either as individual
          participants or in teams of 3.
        </p>
        <p>
          Team categories are Male only, Female only and Mixed. Prizes for all
          three corporate team categories will be on offer. And then afterwards
          why don't you make it a social night out with your team? Please
          connect on
          <a href="https://www.facebook.com/crusaders5k" target="_blank">
            Facebook
          </a>
          ,
          <a href="https://twitter.com/docklands5k" target="_blank">
            Twitter
          </a>
          &amp;
          <a href="https://www.instagram.com/docklands5k" target="_blank">
            Instagram
          </a>
          for updates on the event.
        </p>
      </section>
      <section class="highlights">
        <div>
          <h4>Free Technical T-Shirt</h4>
        </div>
        <div>
          <h4>Fast &amp; Flat Course</h4>
        </div>
        <div>
          <h4>Individual and Team Prizes</h4>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~assets/css/_vars';

.content {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 0 2em 0;

  section {
    width: 50%;

    &.highlights {
      display: flex;
      flex-flow: row wrap;
      width: 100%;

      div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 33.3%;
        padding: 0 22px;

        &:nth-child(2) {
          border-left: solid 5px $highlight;
          border-right: solid 5px $highlight;
        }
      }
    }
  }

  @media screen and (max-width: $break-medium - 1) {
    section {
      width: 100%;
    }
  }
}
</style>
