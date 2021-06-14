<template>
  <div id="app">
    <!-- <div @click="smallView = false" v-if="smallView" :class="showFull ? 'left-55.5' : 'left-24.5'" class="py-3 px-5 fixed top-18 right-0 bg-primary text-white lg:hidden text-center text-sm">
      Switch to a large screen for a better experience. Click to clear.
    </div> -->
    <!-- <div v-if="!['/signup', '/login', '/*'].includes($route.path)">
      <navbar v-if="$route.name !== '404'"  />
      <drawer v-if="$route.name !== '404'" @showFullDrawer="showDrawer" :showFullLink="showFull" />
    </div> -->
    <div :class="[!['/signup', '/login'].includes($route.path) ? [$route.name === '404' ? '' : 'ml-24.5 xl:ml-64 mt-18'] : '']">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
// import Drawer from './components/shared/Drawer.vue'
// import Navbar from './components/shared/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Drawer,
    // Navbar
  },
  mounted() {
    if(['/signup', '/login'].includes(this.path)) {
      this.auth = false
    }
  },
  computed: {
    path() {
      return this.$route.path
    }
  },
  data() {
    return {
      // path: window.location.pathname,
      smallView: true,
      auth: true,
      showFull: false
    }
  },
  methods: {
    showDrawer() {
      this.showFull = !this.showFull
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  /* transition: opacity 0.8s, transform 0.8s; */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  /* transform: translateX(-80%); */
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
