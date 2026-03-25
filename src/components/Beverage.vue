<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="!noCreamer" :color="creamerColor"/>
      </template>
      <template v-slot:mid>
        <Syrup v-if="!noSyrup" :color="syrupColor" :color2="'#E1CF95'"/>
      </template>
      <template v-slot:bottom>
        <Base :color="baseColor"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  noSyrup: boolean;
  noCreamer: boolean;
  baseColor: string;
  syrupColor: string;
  creamerColor: string;
};
defineProps<Props>();
</script>
