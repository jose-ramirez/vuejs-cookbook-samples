<template>
  <Card>
    <h3>List of expensive experiments</h3>
    <ul>
      <li v-bind:key="exp" v-for="exp in nonPhysicsExperiments">{{exp.name}} ({{exp.cost}} m eur)</li>
      <li v-bind:key="exp" v-for="exp in filteredExperiments">{{exp.name}} ({{exp.cost}} m eur)</li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: "Experiments",
  data: () => {
    return {
      experiments: [
        { name: "RHIC Ion Collider", cost: 650, field: "Physics" },
        { name: "Neptune Undersea Observatory", cost: 100, field: "Biology" },
        { name: "Violinist in the Metro", cost: 3, field: "Psychology" },
        { name: "Large Hadron Collider", cost: 7700, field: "Physics" },
        { name: "DIY Particle Detector", cost: 0, field: "Physics" }
      ]
    };
  },
  computed: {
    nonPhysicsExperiments() {
      return this.experiments.filter(exp => exp.field != "Physics");
    },
    filteredExperiments() {
      return this.nonPhysics(this.lowCost(this.experiments));
    }
  },
  methods: {
    nonPhysics(list) {
      return list.filter(exp => exp.field != "Physics");
    },
    lowCost(list) {
      return list.filter(exp => exp.cost <= 3);
    }
  }
};
</script>