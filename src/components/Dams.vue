<template>
  <Card>
    <table>
      <thead>
        <th>Name</th>
        <th>Country</th>
        <th v-bind:class="order === -1? 'ascending' : 'descending'" @click="sort">Electricity</th>
      </thead>
      <tbody>
        <tr v-bind:key="dam.name" v-for="dam in damsByElectricity">
          <td>{{dam.name}}</td>
          <td>{{dam.country}}</td>
          <td>{{dam.electricity}} MW</td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script>
export default {
  name: "Dams",
  data: () => {
    return {
      dams: [
        { name: "Nurek Dam", country: "Tajikistan", electricity: 3200 },
        { name: "Three Gorges Dam", country: "China", electricity: 22500 },
        { name: "Tarbela Dam", country: "Pakistan", electricity: 3500 },
        { name: "Guri Dam", country: "Venezuela", electricity: 10200 }
      ],
      order: 1
    };
  },
  computed: {
    damsByElectricity() {
      return this.dams
        .slice()
        .sort((d1, d2) => this.order * (d2.electricity - d1.electricity));
    }
  },
  methods: {
    sort() {
      this.order *= -1;
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ascending::after {
  content: "25B2";
}
.descending::after {
  content: "25BC";
}
</style>