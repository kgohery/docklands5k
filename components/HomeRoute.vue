<template>
  <div id="route">
    <h2>Route</h2>
    <section class="col-xs-12">
      <picture class="route">
        <source media="(max-width: 580px)" srcset="~/assets/images/map-s.jpg" />
        <source
          media="(min-width: 581px) AND (max-width: 1023px)"
          srcset="~/assets/images/map-m.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcset="~/assets/images/map-l.jpg"
        />
        <img src="~/assets/images/map-l.jpg" alt="Docklands 5k race route" />
      </picture>
      <div class="content">
        <p>
          The race will be held on Thursday, June 23rd starting at 7:45pm. The
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
          away from the bag drop area in Capital Dock Square and that well deserved night out!
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeRoute',
};
</script>

<style scoped lang="scss">
.route img {
  width: 100%;
}
</style>
