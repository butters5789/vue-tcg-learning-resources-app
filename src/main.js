import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';

const vueApp = createApp(App);

vueApp.component('base-card', BaseCard);

vueApp.mount('#app');
