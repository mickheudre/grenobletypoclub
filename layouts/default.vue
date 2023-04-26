<template>
    <div class="flex flex-col sm:flex-row w-screen min-h-screen overflow-y-hidden px-4 sm:px-0">
      <div class="w-full sm:w-64 flex sm:h-screen flex-row sm:flex-col items-center justify-between sm:justify-start sm:border-r-2 border-green">
        <NuxtLink to="/"><Logo class="fill-green w-24 h-24 sm:w-40 sm:h-40 my-4 sm:my-8"/></NuxtLink>
        <NuxtLink class="text-green sm:w-full py-4 text-center sm:border-y-2 uppercase" to="about">A Propos</NuxtLink>
        <NuxtLink class="text-green w-full py-4 text-center sm:border-b-2 uppercase hidden lg:block" to="typos">Typographie</NuxtLink>
      </div>
      <div class="flex flex-col relative w-full">
        <slot />
      </div>
      
    </div>
  </template>
  <script setup lang="ts">
  import { Typo } from '~/components/TypoBig.vue'
  useHead({
    script: [
    { 
      async: true,
      src: 'https://scripts.withcabin.com/hello.js',
    }]
  })
  const selected = ref("lustucrust")
  const typos : Array<Typo> = [
  {
    name: "lustucrust",
    text: "La douleur peut etre positive",
    size: "2xl"
  },
  {
    name: "digitale",
    text: "La propriete privee mene au crime",
    size: "xl"
  },
  ]
  
  </script>