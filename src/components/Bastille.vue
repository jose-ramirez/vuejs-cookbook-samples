<template>
  <Card>The storming of the Bastille happened on {{bastilleStormingDate | date('fr')}}</Card>
</template>

<script>
import Date from "../filters/date";

export default {
  name: "Bastille",
  data: () => {
    return {
      bastilleStormingDate: "1789-07-14 17:00:00"
    };
  }
};
</script>