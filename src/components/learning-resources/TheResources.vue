<template>
  <base-card>
    <base-button
      type="button"
      :mode="learningResourcesButtonMode"
      @click="setSelectedTab('learning-resources')"
    >
      Learning Resources
    </base-button>

    <base-button
      type="button"
      :mode="addResourceButtonMode"
      @click="setSelectedTab('add-resource')"
    >
      Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import LearningResources from './LearningResources.vue';

export default {
  components: {
    AddResource,
    LearningResources,
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
      selectedTab: 'learning-resources',
    };
  },
  provide() {
    return {
      resources: this.learningResources,
      addResource: this.addResource,
    };
  },
  computed: {
    learningResourcesButtonMode() {
      return this.selectedTab === 'learning-resources' ? null : 'flat';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };

      this.learningResources.unshift(newResource);
      this.selectedTab = 'learning-resources';
    },
  },
};
</script>

<style></style>
