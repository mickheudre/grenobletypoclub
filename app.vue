<template>
  <div class="grid grid-cols-4 w-screen h-screen justify-center">
    <div class="w-64 flex flex-col items-center border-r-2 border-green">
      <Logo class="fill-green w-40 h-40 my-16"/>
      <NuxtLink class="text-green w-full py-4 text-center border-y-2 uppercase">A Propos</NuxtLink>
      <NuxtLink class="text-green w-full py-4 text-center border-b-2 uppercase">Typographie</NuxtLink>
    </div>
    <div class="flex relative col-span-2">
      <TypoBig @click="selected = typo.name" v-bind="typo" v-for="(typo, index) in typos " class="transform  absolute" :class="selected == typo.name ? 'z-50' : 'left-16 hover:left-24 top-2'" />      
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
  size: "2xl"
},
]

</script>