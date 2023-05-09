<template>
  <div class="w-full">
   <FontBrowser :fonts="fonts.data.value.api" class="hidden lg:flex mx-4"/>
   <div class="flex flex-col mx-4 sm:mx-8">
      <TypoSmall v-bind="typo" v-for="(typo, index) in fonts.data.value.api" class="my-2 lg:hidden"/> 
   </div>
</div>
</template>
<script setup lang="ts">
useHead({
  script: [
  { 
    async: true,
    src: 'https://scripts.withcabin.com/hello.js',
  }]
})

// const fonts = await useGetFonts()
const fonts = await useFetch("/api/fonts");
</script>

