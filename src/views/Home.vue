<template>
  <div class="container">
    <Range />
    <Countdown />
    <Toast />
    <Capitalize />
    <Fullname />
    <Tables />
    <Experiments />
    <Dams />
    <Currencies />
    <Bastille />
    <Ghost />
    <Textarea />
  </div>
</template>

<script>
// @ is an alias to /src
import Range from "@/components/Range.vue";
import Countdown from "@/components/Countdown.vue";
import Toast from "@/components/Toast.vue";
import Capitalize from "@/components/Capitalize.vue";
import Fullname from "@/components/Fullname.vue";
import Tables from "@/components/Tables.vue";
import Experiments from "@/components/Experiments.vue";
import Dams from "@/components/Dams.vue";
import Currencies from "@/components/Currencies.vue";
import Bastille from "@/components/Bastille.vue";
import Ghost from "@/components/Ghost.vue";
import Textarea from "@/components/Textarea.vue";

export default {
  name: "home",
  components: {
    Range,
    Countdown,
    Toast,
    Capitalize,
    Fullname,
    Tables,
    Experiments,
    Dams,
    Currencies,
    Bastille,
    Ghost,
    Textarea
  }
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(4, 300px);
  background-color: #c5c7c9;
}
</style>