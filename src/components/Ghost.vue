<template>
  <Card>
    <div v-show="isNight">I'm a ghost! Boo!</div>
  </Card>
</template>

<script>
export default {
  name: "Ghost",
  data: () => {
    return {
      isNightAlready: true
    };
  },
  computed: {
    isNight() {
      return new Date().getHours() < 24;
    }
  }
};
</script>