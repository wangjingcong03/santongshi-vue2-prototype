import Vue from 'vue'
import Router from 'vue-router'
import ThreeSameList from '../views/ThreeSameList.vue'
import ThreeSameDetail from '../views/ThreeSameDetail.vue'
import ThreeSameSpecialList from '../views/ThreeSameSpecialList.vue'

Vue.use(Router)
export default new Router({ mode: 'hash', routes: [
  { path: '/', redirect: '/three-same/environment' },
  { path: '/three-same/environment', name: 'three-same-list', component: ThreeSameList, props: true },
  { path: '/three-same/safety', name: 'three-same-safety', component: ThreeSameSpecialList, props: { type: 'safety' } },
  { path: '/three-same/health', name: 'three-same-health', component: ThreeSameSpecialList, props: { type: 'health' } },
  { path: '/three-same/:type/:id', name: 'three-same-detail', component: ThreeSameDetail, props: true }
]})
