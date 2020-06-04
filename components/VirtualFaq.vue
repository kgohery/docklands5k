<template>
  <section id="faq">
    <h2>FAQ</h2>
    <a @click="toggleAnswer('race')" class="question"
      >Why are we organising this virtual race?</a
    >
    <div class="answer race">
      <p>
        Crusaders Athletic Club are delighted to announce that our highly
        successful Docklands 5k race is going virtual for 2020. This is with the
        hope of raising much needed funds for both our clubhouse build, and St
        James’s Hospital Foundation charity.
      </p>
      <p>
        We are in the middle of building our first ever clubhouse. The facility
        is a joint effort, with St Patricks Athletic Football Club, and for the
        benefit of the local community. Unfortunately, we have been hit
        financially because of the Covid crisis - we have lost sponsorship, and
        our ability to fundraise. Here is where you come in - we need you to
        support our race and to spread the word far and wide.
      </p>
      <p>
        We are also delighted to support St James’s Hospital Foundation charity
        through this fundraiser. When registering you will have the option of
        donating to both causes. We really appreciate your support and any
        donations you are in a position to make.
      </p>
    </div>
    <a @click="toggleAnswer('fee')" class="question"
      >Who are Crusaders Athletic Club?</a
    >
    <div class="answer fee">
      <p>
        Crusaders Athletic Club is one of Ireland&#39;s premier Running Clubs.
        Based in Dublin in Irishtown Stadium, minutes from Dublin City Centre.
        We cater for adults and juveniles and of all levels. Our members range
        from complete novices to elite runners and everything in between –
        including casual and competitive runners. We are renowned for our
        welcome and promote a friendly, warm welcoming atmosphere. Founded in
        1942 we are only now in a position to build our first clubhouse, a joint
        facility with the local football team St Patricks Athletic FC, and for
        the benefit of the local community. While the build has commenced, we
        find ourselves in the unfortunate position of losing sponsorship and our
        fund-raising Docklands race. Your assistance in supporting our Docklands
        Virtual 5k is greatly appreciated.
        <a href="http://www.crusadersac.ie" target="_blank"
          >http://www.crusadersac.ie</a
        >
      </p>
    </div>
    <a @click="toggleAnswer('get')" class="question"
      >Who are St James’s Hospital Foundation?</a
    >
    <div class="answer get">
      <p>
        The role of the St James’s Hospital Foundation is to facilitate and
        attract private investment to support the work of St James’s Hospital.
        Donations are used to enhance facilities, support, innovation and
        research, provide education and training for hospital employees and
        elevate the standard of care for all patients.
      </p>
      <p>
        The Foundation also manages research funds on behalf of researchers at
        St James’s Hospital. It is committed to creating an environment in which
        education and research in the health science and allied areas flourishes
        for the betterment of patient care.
        <a href="https://www.supportstjames.ie" target="_blank"
          >https://www.supportstjames.ie/</a
        >
      </p>
    </div>
    <a @click="toggleAnswer('course')" class="question">Results</a>
    <div class="answer course">
      <p>
        Results will appear on
        <a href="https://www.myrunresults.com" target="_blank"
          >https://www.myrunresults.com</a
        >.
        <strong>
          IN THE INTEREST OF FAIRNESS TIMES WILL BE VETTED FOR PRIZE PURPOSES.
        </strong>
      </p>
      <p>
        Participants should run distance and add result ONCE ONLY. For athletes
        featuring high in our table of results, can you also add your Garmin or
        Strava proof link and not just an image or screen shot of your result.
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
