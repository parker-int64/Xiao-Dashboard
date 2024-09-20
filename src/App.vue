<script setup>
import { RouterView } from 'vue-router';
import { NLayout, NLayoutContent, NFlex, NScrollbar, NModalProvider, NDialogProvider, NMessageProvider } from 'naive-ui'
import Header from './components/Header.vue';

</script>

<template>
  <n-layout class="main-layout">
    <n-flex vertical class="main-layout">
      <Header />
      <n-layout-content :content-style="{ width: '80%', margin: '20px auto'}">
        <n-scrollbar>
          <n-message-provider>
            <n-dialog-provider>
              <n-modal-provider>
                <router-view />
              </n-modal-provider>
            </n-dialog-provider>
          </n-message-provider>
        </n-scrollbar>
      </n-layout-content>
    </n-flex>
  </n-layout>
</template>


<style>
html, body, #app, .main-layout {
  width: 100%;
  height: 100%;
}

html, body {
  margin: 0;
}

/* cancel the default style of router */
.router-link-active {
  text-decoration: none;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}

</style>