<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container {
  border: solid 1px;
  border-radius: 4px;
  border-color: #96a2b5;
  background-color: white;
  margin: 1px;
}
</style>
