<template>
  <Card>
    <ul>
      <li v-bind:key="n" v-for="n in countdown">{{n}}</li>
    </ul>
    <li>Launch missile!</li>
  </Card>
</template>

<script>
export default {
  name: "Countdown",
  data: () => {
    return {
      countdown: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    };
  }
};
</script>
