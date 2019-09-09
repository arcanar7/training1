import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.mixin({
    computed: {
        level() {
            return this.$store.getters.getLevel
        },
        questDone() {
            return this.$store.getters.getStats.success + this.$store.getters.getStats.error
        },
    },
    methods: {
        changeState(state) {
            this.$store.dispatch('setAppState', state)
        },
    },
})

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')
