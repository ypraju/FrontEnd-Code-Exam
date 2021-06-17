import Vue from 'vue'
import App from './App.vue'
import { Inkline } from '@inkline/inkline/src';
import '@inkline/inkline/src/inkline.scss';
import * as components from '@inkline/inkline/src/components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faTrash, faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(Inkline, { components });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
