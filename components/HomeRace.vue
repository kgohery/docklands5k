<template>
  <div id="race">
    <h2>Race</h2>

    <div class="content">
      <section>
        <h4>What is it?</h4>

        <p>
          The 2022 race will take place on Thursday, June 23rd, starting at
          7:45pm. The distance is 5k, run over a flat, fast loop in Dublin’s
          Docklands area. Organised by the runners from Crusaders Athletic Club,
          the Docklands 5k race is held with the help of the generous
          sponsorship, provided by many companies located in the Docklands and
          surrounding areas.
        </p>

        <p>
          The Waystone Docklands 5k is a non-profit event. All proceeds will be used to
          improve the facilities of Crusaders AC and to promote sport, health
          and wellbeing in the community.
        </p>

        <p>We look forward to seeing you there!!</p>
      </section>

      <section>
        <h4>Race Format</h4>

        <p>
          Entry is open to runners of all abilities either as individual
          participants or in teams of 3.
        </p>

        <p>
          Team categories are Male only, Female only and Mixed. Prizes for all
          three corporate team categories will be on offer. There are also team
          perpetual trophies for Female and Male AI Club teams (3 to score). And
          then afterwards why don't you make it a social night out with your
          team? Please connect on
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

        <p>
          The race will be held on Thursday, June 23rd, starting at 7:45pm. The
          race starts on the South Docks at Lime Street which is very near to
          the Samuel Beckett Bridge - that's the one almost opposite the
          Convention Centre. From there you will head towards the City Centre
          all the way to the Matt Talbot Bridge which you will cross over to the
          North Quay. From there you will run all the way down to the 3 Arena
          where you will loop back down the North Quay again towards the Matt
          Talbot Bridge. There you will cross the Bridge again and back to the
          South Quay. From there you will run back past the start line. The
          finish line is approx. 500 metres beyond the start line and you will
          finish at Sir John Rogerson's Quay. You are then just a small stroll
          away from the bag drop area in Capital Dock Square and that well deserved night out!!
        </p>

        <p>
          Please stay in touch on
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
          as some road works in the area may result in very slight changes to
          the route. We will let you know well in advance if that is the case.
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

<script>
export default { name: 'HomeRace' };
</script>

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
