<script setup>
import {NFlex, NH1, NLayoutHeader, NInput, NIcon, NButton} from 'naive-ui'

import { Settings } from '@vicons/ionicons5';
import logoUrl from '../assets/logo.webp'

import { RouterLink, useRouter } from 'vue-router';


const router = useRouter()


</script>

<template>
    <n-layout-header 
        style="padding-left: 20px; padding-right: 20px;"
        bordered
    >
        <n-flex justify="space-between" align="center" size="large">
            <fragment>
                <n-flex align="center" size="small">
                    <router-link to="/"><img
                        width="200"
                        :src="logoUrl"
                        alt="logo"
                        style="display: block; margin: auto"
                    /></router-link>
                </n-flex>
            </fragment>

            <n-h1 style="margin-right: 150px;">Dashboard</n-h1>

            <router-link to="/settings">
                <n-button text>
                    <template #icon>
                    <n-icon>
                        <Settings />
                    </n-icon>
                    </template>
                    Settings
                </n-button>
            </router-link>
        </n-flex>
    </n-layout-header>
</template>


<style scoped>

</style>