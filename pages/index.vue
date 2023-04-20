<template>

    <div class="flex flex-col relative md:mx-4 lg:mx-12">
      <TypoBig @click="selected = typo.name" v-bind="typo" v-for="(typo, index) in typos " class="transform w-112  hidden lg:block absolute " :class="selected == typo.name ? 'z-50' : 'left-16  top-2'" />
      <TypoSmall v-bind="typo" v-for="(typo, index) in typos" class="my-2 lg:hidden"/>
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
const selected = ref("lustucrust")
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
  size: "xl"
},
]

</script>