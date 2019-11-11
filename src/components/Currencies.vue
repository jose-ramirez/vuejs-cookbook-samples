<template>
  <Card>
    <table>
      <thead>
        <th>Item</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr v-bind:key="item.name" v-for="item in inventory">
          <td>{{item.name}}</td>
          <td class="price">{{item.price | currency}} $</td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script>
import Currency from "../filters/currency";

export default {
  name: "Currencies",
  data: () => {
    return {
      inventory: [
        { name: "tape measure", price: "7" },
        { name: "stamp", price: "0.01" },
        { name: "shark tooth", price: "1.5" },
        { name: "iphone", price: "999" }
      ]
    };
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.price {
  text-align: right;
}
</style>