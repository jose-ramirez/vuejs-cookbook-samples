<template>
  <Card>Simple text (as an example): {{ text | capitalize }}</Card>
</template>

<script>
import Capitalize from "../filters/capitalize";

export default {
  name: "Capitalize",
  data: () => {
    return {
      text: "hello world!"
    };
  }
};
</script>
