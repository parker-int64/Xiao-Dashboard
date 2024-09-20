<script setup>
import { NResult, NButton, NFlex } from 'naive-ui'
import { RouterLink } from 'vue-router';


</script>

<template>
  <n-result status="404" title="404 not found" description="Life is always a little ridiculous.">
    <template #footer>
      <router-link to="/" v-slot="{ navigate }">
        <n-button @click="navigate">Try to have some fun</n-button>
      </router-link>
    </template>
  </n-result>
</template>


<style scoped>
.n-result {
  margin: 60px 0 0 0;
}

</style>