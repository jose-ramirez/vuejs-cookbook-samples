<template>
  <Card>
    <button v-on:click="toast">Toast bread</button>
    <input v-model="toastedBreads" />
    Quantity of bread: {{ toastedBreads }}
  </Card>
</template>

<script>
export default {
  name: "Toast",
  data: () => {
    return {
      toastedBreads: 0
    };
  },
  methods: {
    toast() {
      this.toastedBreads++;
    }
  }
};
</script>
