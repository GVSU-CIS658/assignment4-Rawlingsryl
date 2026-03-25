<template>
  <div class="syrup"></div>
</template>

<script setup lang="ts">
type Props = {
  color: string;
  color2: string;
};
defineProps<Props>();
</script>
<style lang="scss" scoped>
.syrup {



  transform: translateY(400%);
  background: repeating-linear-gradient(
    45deg,
    v-bind(color2),
    v-bind(color2) 10px,
    v-bind(color) 10px,
    v-bind(color) 20px
  );
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
