<template>
  <div class="flex flex-col relative md:mx-4 lg:mx-12 mt-4">
    <TypoSmall v-bind="typo" v-for="(typo, index) in fonts.data.value.api" class="my-4"/>
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


const fonts = await useFetch("/api/fonts");
</script>