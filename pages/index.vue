<template>
  <section class="container">
    <home-header></home-header>
    <home-race></home-race>
    <home-route></home-route>
    <home-faq></home-faq>
    <home-sponsors></home-sponsors>
    <home-footer></home-footer>
  </section>
</template>

<script>
import HomeHeader from '~/components/HomeHeader.vue'
import HomeRace from '~/components/HomeRace.vue'
import HomeRoute from '~/components/HomeRoute.vue'
import HomeFaq from '~/components/HomeFaq.vue'
import HomeSponsors from '~/components/HomeSponsors.vue'
import HomeFooter from '~/components/HomeFooter.vue'

export default {
  components: {
    HomeHeader,
    HomeRace,
    HomeRoute,
    HomeFaq,
    HomeSponsors,
    HomeFooter
  }
}
</script>
