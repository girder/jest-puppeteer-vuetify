import Vue from 'vue';
import VueRouter from 'vue-router';
import VAvatar from '../views/VAvatar.vue';
import VBtn from '../views/VBtn.vue';
import VCard from '../views/VCard.vue';
import VChip from '../views/VChip.vue';
import VIcon from '../views/VIcon.vue';
import VList from '../views/VList.vue';

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
  {
    path: '/v-chip',
    name: 'VChip',
    component: VChip,
  },
  {
    path: '/v-icon',
    name: 'VIcon',
    component: VIcon,
  },
  {
    path: '/v-list',
    name: 'VList',
    component: VList,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
