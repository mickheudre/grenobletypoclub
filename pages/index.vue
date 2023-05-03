<template>
  <div class="w-full">
    <div class="border-2 border-green my-8 flex justify-between px-8 mx-4 sm:mx-8 rounded-md">
      <NuxtLink class="text-green text-xl my-4 font-semibold" to="typos">Parcourir nos typos <ListIcon class="stroke-green h-6 w-6 inline mx-1" /></NuxtLink>
    </div>
   <FontBrowser class="hidden lg:flex"/>
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
const selected = ref("lustucrust")

const hover = ref(false)

const typos : Array<Typo> = [
{
  name: "lustucrust",
  text: "La douleur peut etre positive",
  description: "LUSTUCRUST est une néo-gothique influencée par les pleins des typographies gothiques. Elle a été composée principalement avec des barres verticales et a été élaborée d'abord pour un calendrier en soutien à un lieu autogéré, le Local Autogéré à Grenoble.",
  size: "2xl"
},
{
  name: "digitale",
  text: "La propriete privee mene au crime",
  description: "DIGITALE est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "lg"
},
{
  name: "Ariale",
  text: "Ma.on doux.ce, nous étions comme deux exilé.es",
  description: "Ariale est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "xl"
},
]


// const sortedTypos  = computed(() => {
//   return typos.sort((a,b) => {
//     return a.name == selected.value ? -1 : b.name == selected.value ? 1 : 0;
//   })
// })


</script>