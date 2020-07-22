import Vue from 'vue';
import VueRouter from 'vue-router';
import VAvatar from '../views/VAvatar.vue';
import VBtn from '../views/VBtn.vue';
import VCard from '../views/VCard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/v-avatar',
    name: 'VAvatar',
    component: VAvatar,
  },
  {
    path: '/v-btn',
    name: 'VBtn',
    component: VBtn,
  },
  {
    path: '/v-card',
    name: 'VCard',
    component: VCard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
