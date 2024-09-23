<script setup>
import { NResult, NButton, NFlex, NGrid, NGi } from 'naive-ui'
import { RouterLink } from 'vue-router';
import ViewBox from '../components/ViewBox.vue';
import Spinner from '../components/Spinner.vue'
import { ref } from 'vue';

import mqtt from 'mqtt';

import demo1 from '../assets/demo_1.png'
import demo2 from '../assets/demo_2.png'
import demo3 from '../assets/demo_3.png'
import demo4 from '../assets/demo_4.png'
import demo5 from '../assets/demo_5.png'
import demo6 from '../assets/demo_6.png'

// Page elements, used in busy indicator
const loadingDevices = ref(false)
const statusWord = ref("Waiting...")

// This is the device lists.
// It contains all the xiao
const deviceLists = [
  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "5d904e80",
    "img": demo1
  },

  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "6d755f90",
    "img": demo2
  },

  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "tjO9th62",
    "img": demo3
  },

  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "6mn4ief0",
    "img": demo4
  },

  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "1taoqcf6",
    "img": demo5
  },

  {
    "name": "Seeed Studio XIAO (ESP32-S3)",
    "id": "zt65aqf6",
    "img": demo6
  }

]




/*----------------------------------- Functions -----------------------------------------*/

/*
* @brief This function connect to mqtt server. 
* @param {mqttAddress} the mqtt server's address
* @param {mqttPort}  port number
*/

const connectMQTTServer = (mqttAddress, mqttPort) => {
  const client = mqtt.connect(mqttAddress)

  return client;

}


/*
* @brief Subscribe the MQTT topic
*        The topics are pre-defined in python-sscma
* @param {client} the mqtt client
* @param {deviceId} your device's ID
*/
const subscribeTopic = (client, deviceId) => {
  const txTopic = `sscma/v0/${deviceId}/tx`
  const rxTopic = `sscma/v0/${deviceId}/rx`

  client.on("connect", () => {
    client.subscribe(txTopic, (err) => {
      if (err) {
        console.log(`Subscribe ${txTopic} failed, error: ${err}`)
      }
    })

    client.subscribe(rxTopic, (err) => {
      if (err) {
        console.log(`Subscribe ${rxTopic} failed, error: ${err}`)
      }
    })
  })


  client.on("message", (topic, message) => {
    // message is Buffer
    console.log(`Topic ${topic}, Message: ${message.toString()}`);
    client.end();
  })
}


/*
* @brief Publish message to the MQTT topic
*        The topics are pre-defined in python-sscma
* @param {client} the mqtt client
* @param {deviceId} your device's ID
* @param {msgPayload} your message
* refer this link to send message:
* https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md
*/
const publishTopic = (client, deviceId, msgPayload) => {
  const txTopic = `sscma/v0/${deviceId}/tx`
  const rxTopic = `sscma/v0/${deviceId}/rx`


  client.on("connect", () => {
    client.subscribe(txTopic, (err) => {
      if (err) {
        console.log(`Subscribe ${txTopic} failed, error: ${err}`)
      } else {
        client.publish(txTopic, msgPayload);
      }
    })
  })

}



/*
* @brief Convert the base 64 string to image...
*        
* @param {base64Str} the base 64 string.
*/
const base64ToImage = (base64Str) => {
  const image = new Image();

  image.src = `data:image/png;base64,${base64Str}`;

  return image

}


</script>

<template>

  <n-grid v-if="!vendorCategory" :x-gap="12" :y-gap="8" cols="2 s:3 m:4 l:4 xl:5 2xl:6" responsive="screen">
    <n-gi v-for="(device, index) in deviceLists">
      <!-- <router-link :to="{ name: 'product', params: { id: `${item['product_ID']}`, imgUrl: getItemImgUrl(item['product_ID']) }}" >
      <>
    </router-link> -->
      <ViewBox v-bind:device-name="device['name']" v-bind:device-id="device['id']"
        v-bind:place-holder="device['img']" />
    </n-gi>
  </n-grid>




  <Spinner v-if="loadingDevices" />
  <n-flex justify="center">
    <n-p v-if="loadingDevices">Status: {{ statusWord }} </n-p>
  </n-flex>
</template>


<style scoped>
.n-result {
  margin: 60px 0 0 0;
}
</style>