<template>
  <Card>
    <label>
      Legs:
      <input type="range" v-model="legCount" />
    </label>
    <label>
      Tops:
      <input @input="update" :value="tableCount" />
    </label>
    <output>We'll make {{legCount}} legs and build {{tableCount}} tables.</output>
  </Card>
</template>

<script>
export default {
  name: "Tables",
  data: () => {
    return {
      legCount: 0
    };
  },
  computed: {
    tableCount: {
      get() {
        return this.legCount / 4;
      },
      set(newValue) {
        this.legCount = newValue * 4;
      }
    }
  },
  methods: {
    update(e) {
      this.tableCount = e.target.value;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container {
  border: solid 1px;
  border-radius: 4px;
  border-color: #96a2b5;
  margin: 1px;
}
</style>
