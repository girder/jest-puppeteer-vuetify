import Vue from 'vue';
import VueRouter from 'vue-router';
import VAvatar from '../views/VAvatar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/v-avatar',
    name: 'VAvatar',
    component: VAvatar,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
