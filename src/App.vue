<template>
  <the-header title="Remember Me"></the-header>
  <learning-resources :resources="learningResources"></learning-resources>
</template>

<script>
import LearningResources from './components/learning-resources/LearningResources.vue';
import TheHeader from './components/layouts/TheHeader.vue'

export default {
  components: {
    LearningResources,
    TheHeader,
  },
  data() {
    return {
      learningResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://www.vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google knows all.',
          link: 'https://www.google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
