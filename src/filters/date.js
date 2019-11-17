import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', (dateString, locale) => {
    moment.locale(locale)
    return moment(dateString).format('LL')
})