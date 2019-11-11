import Vue from 'vue'
import accounting from 'accounting'

Vue.filter('currency', (number) => {
    return accounting.format(number)
})