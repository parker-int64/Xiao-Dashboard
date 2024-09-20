<script setup>
import { NCard, NImage, NFlex } from 'naive-ui'

const props = defineProps({
  placeHolder: {
    type: String,
    default: "https://placehold.co/400.svg"   // act like a fallback, since there's something wrong with the `fallback-src` in `n-image`
  },
  deviceName: {
    type: String,
    default: "XIAO ESP32S3 Sense"
  },
  deviceId: {
    type: String,
    default: "0000000"
  }
})


const showLoadingError = () => {
    console.log(e)
}

const onLoading = () => {

}


const redirectToItemPage = (itemId) => {
  console.log("Redirecting")
}

</script>


<template>
    <n-card :title="deviceName" @click="redirectToItemPage" hoverable embedded>
    <template #cover>
      <n-flex justify="center" align="center">
        <n-image
          :src="placeHolder"
          preview-disabled
          @on-error="showLoadingError"
          @on-load="onLoading"
          width="200"
          height="200"
          object-fit="contain"
        />
      </n-flex>
    </template>
    Device ID: {{ deviceId }}
  </n-card>
</template>



<style scoped>

</style>