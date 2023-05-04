<template>
  <div class="w-full">
    <div class="border-2 border-green my-8 flex justify-between px-8 mx-4 sm:mx-8 rounded-md">
      <NuxtLink class="text-green text-xl my-4 font-semibold" to="typos">Parcourir les typos <Arrow class="stroke-green h-6 w-6 inline" /></NuxtLink>
    </div>
   <FontBrowser class="hidden lg:flex mx-4"/>
   <div class="flex flex-col lg:hidden mx-4 sm:mx-8">
      <TypoSmall v-bind="typo" v-for="(typo, index) in typos" class="my-2 lg:hidden"/> 
   </div>
</div>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
useHead({
  script: [
  { 
    async: true,
    src: 'https://scripts.withcabin.com/hello.js',
  }]
})

</script>