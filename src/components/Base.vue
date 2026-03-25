<template>
  <div class="baseBeverage"></div>
</template>

<script setup lang="ts">
type Props = {
  color: string;
};
defineProps<Props>();
</script>


<style scoped>
.baseBeverage {
  background-color: v-bind(color);
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
