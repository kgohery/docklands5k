<template>
  <section id="faq">
    <h2>FAQ</h2>
    <a @click="toggleAnswer('race')" class="question">
      What about the Race itself?
    </a>
    <div class="answer race">
      <p>
        The race will be a flat 5k route around the docklands area and will be
        held on the evening of Tuesday, July 7th, starting at 7:45pm. See the
        <a href="#route">Route Map</a> section.
      </p>
    </div>
    <a @click="toggleAnswer('fee')" class="question">
      What's the Entry Fee?
    </a>
    <div class="answer fee">
      <p>
        The race entry fee is &euro;21 per individual athlete. Teams of 3 are
        &euro;63. There will be a small admin fee to cover bank charges and
        process fees. The minimum age requirement for entry into the race is 16.
      </p>
      <p>
        Online entries close at 21:00 on Sunday July 5th.
      </p>
      <p>
        After that time (up to race day at 17:00) or until we reach the race
        limit we will be able to accept walk-ins for €25 per entry. Available at
        number and shirt pick up in Club Vitae in the Clayton Hotel on Cardiff
        Lane.
      </p>
    </div>
    <a @click="toggleAnswer('get')" class="question">
      What do I get for this?
    </a>
    <div class="answer get">
      <p>
        A well-organised race but also you will receive a superb Technical
        Running T-shirt. All race numbers will have a built in timing chip to
        give you an accurate race time. Further giveaways, prizes and promotions
        will be announced on
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
      </p>
    </div>
    <a @click="toggleAnswer('course')" class="question">
      The Course
    </a>
    <div class="answer course">
      <p>
        The race will be held on Tuesday, July 7th, starting at 7:45pm. The race
        starts on the South Docks at Lime Street which is very near to the
        Samuel Beckett Bridge - that's the one almost opposite the Convention
        Centre. From there you will head towards the City Centre all the way to
        the Matt Talbot Bridge which you will cross over to the North Quay. From
        there you will run all the way down to the 3 Arena where you will loop
        back down the North Quay again towards the Matt Talbot Bridge. There you
        will cross the Bridge again and back to the South Quay. From there you
        will run back past the start line. The finish line is approx. 500 metres
        beyond the start line and you will finish at Sir John Rogerson's Quay.
      </p>
    </div>
    <a @click="toggleAnswer('prizes')" class="question">
      Prizes
    </a>
    <div class="answer prizes">
      <h5>Individual Prizes</h5>
      <p>
        Cash prizes for 1st, 2nd and 3rd male and female athletes across the
        line.
      </p>
      <h5>Age Category Prizes</h5>
      <p>
        Male and Female: 1st O/40, 45, 50, 55, 60 and 65 and 2nd O/40, 45 and
        50<br />
        In order to be eligible for individual prizes runners should be outside
        of 1st 3 across the line or in a podium-placed corporate team.
      </p>
      <h5>Teams</h5>
      <p>
        Cash prizes for 1st, 2nd and 3rd mixed (in any combination), all male
        and all female teams of 3. There will also be trophies for winning male
        and female AAI-affiliated athletic club teams.
      </p>
      <h5>Course Records</h5>
      <p>
        There are prizes for breaking the male and female course records which
        respectively stand at 14:30 (John Coghlan) and 16:12 (Shona Heaslip) set
        in 2017.
      </p>
    </div>
    <a @click="toggleAnswer('collection')" class="question">
      WHERE DO I COLLECT RACE NUMBERS AND TECH RUNNING T-SHIRT?
    </a>
    <div class="answer collection">
      <p>
        Registration (numbers and t-shirt pickup for those who will not be
        availing of the mailing arrangement) will be held at Club Vitae in the
        basement of the Clayton Hotel on Cardiff Lane. Hours will be:<br />
        Monday July 6th: 07:00-09:00; 12:00-14:00 and 17:00-19:00<br />
        Tuesday July 7th: 07:00-09:00; 12:00-14:00 and 17:00-19:00
      </p>
      <p>
        Anyone who has had their number sent out to them by mail is welcome to
        come into registration and, upon presentation of the number, can get the
        t-shirt. Otherwise, we'll have tee shirts available after the finish
        line for those who want to collect them but we can't guarantee size!
      </p>
    </div>
    <!--
    <a @click="toggleAnswer('bag-drop')" class="question">
      WHERE CAN I LEAVE MY STUFF WHILST I RACE?
    </a>
    <div class="answer bag-drop">
      <p>
        There will be a designated bag drop area on Admiral Brown Street. At
        registration you will receive a sticker coinciding with your race number
        which you should attach to your baggage. Collect your baggage in the
        same spot after the race and DON'T forget to bring your race number so
        that we know which bag to give you back!!!
      </p>
    </div>
    -->
    <a @click="toggleAnswer('water')" class="question">
      WILL THERE BE WATER AVAILABLE?
    </a>
    <div class="answer water">
      <p>
        Yes, there will be water available at the Finish of the race. However,
        we advise runners to be reasonably well hydrated and to sip water
        throughout the day of the race. We have to allow for a heat wave!! Also
        stay connected on
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
        to hear about other post-race refreshments!
      </p>
    </div>
    <a @click="toggleAnswer('money')" class="question">
      AND WHERE DOES THE MONEY GO?
    </a>
    <div class="answer money">
      <h5>The Short Answer</h5>
      <p>
        We, Crusaders Athletic Club, are investing ALL the proceeds from the
        race into providing much needed sporting facilities to serve the
        Docklands Community in our HQ at Irishtown Stadium. So, money from the
        community will be invested back into the community.
      </p>
      <h5>The Slightly Longer Answer</h5>
      <p>
        The Docklands area is a vibrant and growing area. Indeed the Docklands
        has been designated as a Strategic Development Zone (SDZ) which
        envisages a large rise of some 25,000 people in both the working and
        residential population in the Docklands during the next few years as
        more and companies set up in the area. This will give rise to a
        requirement for more residential living space.
      </p>
      <p>
        Recreation plays a very important role in our lives. All work and no
        play, Jack!!! The Docklands area boasts a magnificent sport arena in
        Irishtown Stadium. There is not only a full 8 lane athletics track but
        also a fully equipped gym, all-weather 11-a side (which is also used for
        Tag Rugby), all-weather 5 a side pitches along with shower and changing
        room facilities all available and open to the public.
      </p>
      <p>
        Crusaders Athletic Club (founded 1942) invested heavily in the
        construction of Irishtown Stadium in the early 2000's with the remainder
        being financed by Dublin City Council (DCC). Crusaders, as a result of
        this investment, are the anchor tenant in the stadium which is managed
        by DCC and open to all. The offering of the facilities in Irishtown
        Stadium to both residents and local companies' employees has seen our
        membership grow to 650 members (250 children and 400 adults) since 2015.
        We thus provide a crucial role in the Docklands community providing a
        healthy and worthwhile recreational activity to all.
      </p>
      <p>
        Crusaders Athletic Club will use all the proceeds from the event to
        further enhance the sport facilities in the stadium to cater for the
        growing demand which will be placed upon the facilities.
      </p>
      <p>
        So money from the Community raised through the Docklands 5k is invested
        back into the Community!! We hope you agree that this is a very
        worthwhile cause and one where you and many others will directly
        benefit.
      </p>
      <p>
        Check out the club website
        <a href="http://www.crusadersac.ie" target="_blank">
          www.crusadersac.ie
        </a>
      </p>
    </div>
    <a @click="toggleAnswer('results')" class="question">
      Results
    </a>
    <div class="answer results">
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
export default {
  name: 'HomeFaq',

  methods: {
    toggleAnswer(name) {
      document.querySelector(`.answer.${name}`).classList.toggle('answer__open')
    }
  }
}
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
