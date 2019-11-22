<template>
  <Card>
    Transitions are awesome, careful please, don't use them always.
    <transition name="fade">
      <img
        id="tree"
        src="http://i.imgur.com/QDpnaIE.png"
        alt="image of a tree"
        v-show="show"
        @click="show = false"
      />
    </transition>
  </Card>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style lang="scss" scoped>
#tree {
  position: absolute;
  cursor: pointer;
  left: 7.5em;
  top: 0em;
}

.fade-leave-active {
  transition: opacity 0.5;
  opacity: 0;
}
</style>