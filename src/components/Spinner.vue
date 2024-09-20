<script setup>
import { NLayout, NFlex, NSpin, NH1 } from 'naive-ui';
</script>

<template>
    <n-layout content-style="padding: 24px;">
        <n-flex justify="center" align="center" style="min-height: 500px;" vertical>
            <n-h1>Loading...</n-h1>
            <n-spin size="large" />
        </n-flex>
    </n-layout>
</template>