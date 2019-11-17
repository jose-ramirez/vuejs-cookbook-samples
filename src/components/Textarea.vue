<template>
  <Card>
    <textarea v-model="memeText" :class="{warn: textTooLong}" :maxlength="limit"></textarea>
    {{memeText.length}}
  </Card>
</template>

<script>
export default {
  name: "Textarea",
  data: () => {
    return {
      memeText: "start here!",
      limit: 50
    };
  },
  computed: {
    textTooLong() {
      return this.limit - this.memeText.length <= 10;
    }
  }
};
</script>

<style lang='scss' scoped>
.warn {
  background-color: mistyrose;
}
</style>