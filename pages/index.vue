<template>
  <div class="w-full">
   <FontBrowser class="hidden lg:flex mx-4"/>
   <div class="flex flex-col mx-4 sm:mx-8">
      <TypoSmall v-bind="typo" v-for="(typo, index) in fonts" class="my-2 lg:hidden"/> 
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

const fonts = await useGetFonts()

</script>

