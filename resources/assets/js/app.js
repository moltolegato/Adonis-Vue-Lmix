'use strict';

window._ = require('lodash');
window.Vue = require('vue');
window.axios = require('axios');

import myButton from "./components/my-button";

Vue.component('myButton', myButton);

let app = new Vue({

  el: '#adonis-app'
});
