<template>
  <Card>
    <ul>
      <li v-bind:key="name" v-for="(sound, name) in animals">The {{name}} goes {{sound}}</li>
    </ul>
  </Card>
</template>

<script>
export default {
  name: "Animals",
  data: () => {
    return {
      animals: {
        dog: "woof",
        cat: "meow",
        bird: "tweet"
      }
    };
  }
};
</script>
