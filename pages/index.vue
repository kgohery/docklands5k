<template>
  <section class="container">
    <docklands-nav class="nav"></docklands-nav>
    <docklands-book></docklands-book>
    <virtual-header></virtual-header>
    <virtual-race></virtual-race>
    <virtual-faq></virtual-faq>
    <!-- <home-header></home-header>
    <home-covid></home-covid>
    <home-race></home-race>
    <home-route></home-route>
    <home-race-day></home-race-day>
    <home-faq></home-faq>-->
    <home-sponsors></home-sponsors>
    <home-footer></home-footer>
  </section>
</template>

<script>
import DocklandsNav from '~/components/DocklandsNav.vue'
import DocklandsBook from '~/components/DocklandsBook.vue'
// import HomeHeader from '~/components/HomeHeader.vue'
// import HomeRace from '~/components/HomeRace.vue'
// import HomeRoute from '~/components/HomeRoute.vue'
// import HomeRaceDay from '~/components/HomeRaceDay.vue'
// import HomeFaq from '~/components/HomeFaq.vue'
import HomeSponsors from '~/components/HomeSponsors.vue'
import HomeFooter from '~/components/HomeFooter.vue'
// import HomeCovid from '~/components/HomeCovid.vue'
import VirtualHeader from '~/components/VirtualHeader.vue'
import VirtualRace from '~/components/VirtualRace.vue'
import VirtualFaq from '~/components/VirtualFaq.vue'

export default {
  components: {
    DocklandsNav,
    DocklandsBook,
    // HomeHeader,
    // HomeRace,
    // HomeRoute,
    // HomeRaceDay,
    // HomeFaq,
    HomeSponsors,
    HomeFooter,
    // HomeCovid
    VirtualHeader,
    VirtualRace,
    VirtualFaq
  }
}
</script>

<style scoped lang="scss"></style>
