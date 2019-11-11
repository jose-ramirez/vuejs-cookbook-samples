import Vue from 'vue';

Vue.filter('capitalize', (string) => {
    let [first, ...tail] = string;
    return first.toUpperCase() + tail.join('');
})