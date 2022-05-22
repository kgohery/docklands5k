<template>

  <section id="faq">

    <h2>FAQ</h2>

    <a class="question" @click="toggleAnswer('race')">
       What about the Race itself?
    </a>

    <div class="answer race">

      <p>
         The race will be a flat 5k route around the docklands area and will be held
        on the evening of Thursday, June 23rd, starting at 7:45pm. See the
        <a href="#route">Route Map</a>
         section.
      </p>

    </div>

    <a class="question" @click="toggleAnswer('fee')"> What's the Entry Fee? </a>

    <div class="answer fee">

      <p>
         The race entry fee is &euro;20 per individual athlete. Teams of 3 are &euro;60.
        There will be a small admin fee to cover bank charges and process fees. The
        minimum age requirement for entry into the race is 16.
      </p>

      <p>Online entries close at 21:00 on Monday 20th June.</p>

      <p>
         After that time (up to race day at 17:00) or until we reach the race limit
        we will be able to accept walk-ins for &euro;25 per entry. Available at number
        pick up at Club Vitae in the Clayton Hotel in Cardiff Lane, Dublin 2.
      </p>
  <p>If you have a bulk entry requirement with more than 10 runners, we would be happy to send the person a spreadsheet to make it easier to register? They just need to send an email request to our Race Director, James Cottle, at <a href="mailto:jhcottle@hotmail.com">jhcottle@hotmail.com</a></p>
    </div>

    <a class="question" @click="toggleAnswer('get')">
       What do I get for this?
    </a>

    <div class="answer get">

      <p>
         A well-organised race but also you will receive a superb Technical Running
        T-shirt. All race numbers will have a built in timing chip to give you an
        accurate race time. Further giveaways, prizes and promotions will be announced
        on
        <a href="https://www.facebook.com/crusaders5k" target="_blank">
           Facebook
        </a>
         ,
        <a href="https://twitter.com/docklands5k" target="_blank"> Twitter </a>
         &amp;
        <a href="https://www.instagram.com/docklands5k" target="_blank">
           Instagram
        </a>

      </p>

    </div>

    <a class="question" @click="toggleAnswer('course')"> The Course </a>

    <div class="answer course">

      <p>
         The race will be held on Thursday, June 23rd, starting at 7:45pm. The race
        starts on the South Docks at Lime Street which is very near to the Samuel
        Beckett Bridge - that's the one almost opposite the Convention Centre. From
        there you will head towards the City Centre all the way to the Matt Talbot
        Bridge which you will cross over to the North Quay. From there you will run
        all the way down to the 3 Arena where you will loop back down the North Quay
        again towards the Matt Talbot Bridge. There you will cross the Bridge again
        and back to the South Quay. From there you will run back past the start line.
        The finish line is approx. 500 metres beyond the start line and you will
        finish at Sir John Rogerson's Quay. You are then just a small stroll away
        from the bag drop area in Capital Dock Square and that well deserved night out!!
      </p>

    </div>

    <a class="question" @click="toggleAnswer('prizes')"> Prizes </a>

    <div class="answer prizes">
      <p>1st, 2nd and 3rd male and female runners across the lines will receive cash prizes, respectively, of €300, €200 and €100. There will also be a cash prize of €100 if either or both of the male and female course records are broken. The current records are 14:30 (M) and 16:12 (F).</p>
      <p>RunZone vouchers will be awarded to the first two finishers in the following age categories (male and female): O/40, O/45, O/50 and to the first finisher in the following age categories (male and female): O/55, O/60, O/65 (excluding anyone who finishes in the first 3 or as a participant in corporate team that wins a prize).</p>
      <p>RunZone vouchers will be awarded to the first 3 all-male, all-female and mixed (2 males, 1 female or 2 females, 1 male) teams.</p>
      <p>
        The John Fitzsimons and Marty Purcell permanent cups will be awarded to, respectively, the winning 3-man and 3-woman AAI-affiliated athletics club team.
      </p>

    </div>

    <a class="question" @click="toggleAnswer('collection')">
       WHERE DO I COLLECT RACE NUMBERS AND TECH RUNNING T-SHIRT?
    </a>

    <div class="answer collection">

      <p>If not already requested by post the tee shirts and numbers can be collected from Club Vitae in the Clayton Hotel, Cardiff lane, Dublin 2 at the following times:<br />
        Wednesday 22June 2022: 07:00-09:00; 12:00-14:00 and 17:00-19:00.


<br />
Thursday 23 June 2022: 07:00-09:00; 12:00-14:00 and 17:00-19:00
      </p>


    </div>

    <a class="question" @click="toggleAnswer('bag-drop')">
       WHERE CAN I LEAVE MY STUFF WHILST I RACE?
    </a>

    <div class="answer bag-drop">

      <p>
        There will be a designated bag drop area in Capital Dock Square. At the bag drop you will
        receive a sticker coinciding with your race number which you should attach
        to your baggage. Collect your baggage in the same spot after the race and
        DON'T forget to bring your race number so that we know which bag to give
        you back!!!
      </p>

    </div>

    <a class="question" @click="toggleAnswer('water')">
       WILL THERE BE WATER AVAILABLE?
    </a>

    <div class="answer water">

      <p>
         Yes, there will be water available at the Finish of the race. However, we
        advise runners to be reasonably well hydrated and to sip water throughout
        the day of the race. We have to allow for a heat wave!! Also stay connected
        on
        <a href="https://www.facebook.com/crusaders5k" target="_blank">
           Facebook
        </a>
         ,
        <a href="https://twitter.com/docklands5k" target="_blank"> Twitter </a>
         &amp;
        <a href="https://www.instagram.com/docklands5k" target="_blank">
           Instagram
        </a>
         to hear about other post-race refreshments!
      </p>

    </div>

    <a class="question" @click="toggleAnswer('money')">
       AND WHERE DOES THE MONEY GO?
    </a>

    <div class="answer money">

      <h5>The Short Answer</h5>

      <p>
         We, Crusaders Athletic Club, are investing ALL the proceeds from the race
        into providing much needed sporting facilities to serve the Docklands Community
        in our HQ at Irishtown Stadium. So, money from the community will be invested
        back into the community.
      </p>

      <h5>The Slightly Longer Answer</h5>

      <p>
         The Docklands area is a vibrant and growing area. Indeed the Docklands has
        been designated as a Strategic Development Zone (SDZ) which envisages a large
        rise of some 25,000 people in both the working and residential population
        in the Docklands during the next few years as more companies set up in the
        area. This will give rise to a requirement for more residential living space.

      </p>

      <p>
         Recreation plays a very important role in our lives. The Docklands area
        boasts a magnificent sports arena in Irishtown Stadium. There is not only
        a full 8 lane athletics track but also a fully equipped gym, all-weather
        11-a side (which is also used for Tag Rugby), all-weather 5 a side pitches
        along with shower and changing room facilities all available and open to
        the public.
      </p>

      <p>
         Crusaders Athletic Club (founded 1942) invested heavily in the construction
        of Irishtown Stadium in the early 2000's with the remainder being financed
        by Dublin City Council (DCC). Crusaders, as a result of this investment,
        are the anchor tenant in the stadium which is managed by DCC and open to
        all. Moreover, in 2021 we completed the building of a state-of-the-art clubhouse
        at the stadium, containing, for training purposes, a 40-metres indoor track,
        which will continue to enable us to offer a high level of support to the
        athletic community, including schools in the area. The offering of the facilities
        in Irishtown Stadium to both residents and local companies' employees has
        seen our membership grow to 500 members in 2021. We thus provide a crucial
        role in the Docklands community providing a healthy and worthwhile recreational
        activity to all.
      </p>

      <p>
         Crusaders Athletic Club will use all the proceeds from the event to further
        enhance the sport facilities in the stadium to cater for the growing demand
        which will be placed upon the facilities.
      </p>

      <p>
         So money from the Community raised through the Docklands 5k is invested
        back into the Community!! We hope you agree that this is a very worthwhile
        cause and one where you and many others will directly benefit.
      </p>

      <p>
         Check out the club website
        <a href="http://www.crusadersac.ie" target="_blank">
           www.crusadersac.ie
        </a>

      </p>

    </div>

    <a class="question" @click="toggleAnswer('results')"> Results </a>

    <div class="answer results">

      <p>
         2022 Results will appear on
        <a href="https://www.myrunresults.com" target="_blank">
           https://www.myrunresults.com
        </a>

      </p>

      <p>
         2020 Docklands Virtual 5k Results:
        <a
          href="https://www.myrunresults.com/events/docklands_virtual_5k/3944/results"
          target="_blank"
        >
           https://www.myrunresults.com/events/docklands_virtual_5k/3944/results

        </a>

      </p>

      <p>
         2019 Docklands 5k Results:
        <a
          href="https://www.myrunresults.com/events/indeed_docklands_5k_corp_results/3020/results"
          target="_blank"
        >
           https://www.myrunresults.com/events/indeed_docklands_5k_corp_results/3020/results

        </a>

      </p>

      <p>
         2018:
        <a
          href="https://www.myrunresults.com/events/dublin_docklands_5k_2018/2681/results"
          target="_blank"
        >
           https://www.myrunresults.com/events/dublin_docklands_5k_2018/2681/results

        </a>

      </p>

      <p>
         2017:
        <a
          href="https://www.myrunresults.com/events/dublin_docklands_5k/2340/results"
        >
           https://www.myrunresults.com/events/dublin_docklands_5k/2340/results
        </a>

      </p>

      <p>
         2016:
        <a href="http://www.myrunresults.com/events/docklands_5k/1654/results">
           http://www.myrunresults.com/events/docklands_5k/1654/results
        </a>

      </p>

    </div>

  </section>

</template>

<script>
 export default { name: 'HomeFaq', methods: { toggleAnswer(name) { document .querySelector(`.answer.${name}`)
.classList.toggle('answer__open'); }, }, };
</script>

<style lang="scss" scoped>
@import '~assets/css/_vars';

.question {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: $secondary;
  color: $white;
  padding: 2em;
  text-decoration: none;
  cursor: pointer;
  border-top: solid 1px $white;
  text-transform: uppercase;

  @media screen and (max-width: $break-medium - 1) {
    text-align: center;
  }
}

.answer {
  display: none;
  padding: 2em;

  p {
    padding: 1em 0;
  }

  @media screen and (max-width: $break-medium - 1) {
    padding: 2em 0;
  }

  &__open {
    display: block;
  }
}
</style>

