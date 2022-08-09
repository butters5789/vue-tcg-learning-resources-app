<template>
  <ul>
    <learning-resource
      v-for="learningResource in learningResources"
      :key="learningResource.id"
      :description="learningResource.description"
      :link="learningResource.link"
      :title="learningResource.title"
    />
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  components: {
    LearningResource,
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

<style></style>
