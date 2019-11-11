<template>
  <Card>
    <input type="text" v-model="name" />
    <input type="text" id="surname" value="Snow" />
    <button @click="saveSurname">Save Surname</button>
    <output>{{ computedFullName }}</output>
  </Card>
</template>

<script>
let surname = "Snow";
export default {
  name: "Fullname",
  data: () => {
    return {
      name: "John"
    };
  },
  computed: {
    computedFullName() {
      return `${this.name} ${surname}`;
    }
  },
  methods: {
    saveSurname() {
      surname = this.$el.querySelector("#surname").value;
    }
  }
};
</script>
