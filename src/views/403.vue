<script setup>
import { NResult, NButton } from 'naive-ui'
import { RouterLink } from 'vue-router';
</script>

<template>
    <n-result
      status="403"
      title="403 Forbidden"
      description="There are always doors that are closed to you."
    >
      <template #footer>
        <router-link to="/" v-slot="{ navigate }">
          <n-button @click="navigate">Try to have some fun</n-button>
        </router-link>
      </template>
    </n-result>
</template>