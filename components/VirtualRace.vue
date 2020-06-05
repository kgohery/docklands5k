<template>
  <div id="race">
    <h2>Virtual Race</h2>
    <div class="content">
      <p>
        Crusaders Athletic Club are delighted to announce that our highly
        successful Docklands 5k race is going virtual for 2020. This is with the
        hope of raising much needed funds for both our clubhouse build, and St
        James’s Hospital Foundation charity.
      </p>
      <section>
        <h4>PREDICT YOUR 5k TIME</h4>
        <p>
          At registration you will have the option to predict your 5k time. Then
          on the day try to run as close to same as you can – you might even
          consider not looking at your watch until the end. Provide
          myrunresults.com with your time - you can verify your time through any
          wearable device technology that recorded your run: Strava, Garmin, Fit
          bit etc. Those closest to their predictions will be entered into a
          draw for a fabulous prize.
        </p>
      </section>
      <section>
        <h4>Perpetual Trophies</h4>
        <p>
          There are also team perpetual trophies for Female and Male AI Club
          teams (3 to score). Provide myrunresults.com with your time. You can
          verify your time through any wearable device technology that recorded
          your run: Strava, Garmin, Fit bit etc.
        </p>

        <h4>
          <a
            href="https://www.myrunresults.com/events/docklands_virtual_5k/3944"
            target="_blank"
            >Enter Now!</a
          >
        </h4>
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
