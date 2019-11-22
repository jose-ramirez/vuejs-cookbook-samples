<template>
  <Card>
    <article>
      They call me fruit.
      <br />They call me fish.
      <br />They call me insect.
      <br />But actually I'm none of those.
      <div id="solution" @click="showSolution = true">
        I am a
        <transition name="fade">
          <span id="dragon" v-show="showSolution">Dragon</span>
        </transition>
      </div>
    </article>
  </Card>
</template>

<script>
export default {
  name: "Riddle",
  data() {
    return {
      showSolution: false
    };
  }
};
</script>

<style lang="scss" scoped>
#solution {
  cursor: pointer;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
</style>