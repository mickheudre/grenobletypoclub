<template>
    <div class="w-full" :class="hover ? 'flex flex-wrap ' : 'relative justify-center'">
      <TypoBig @mouseover="hover = true"   v-bind="typo" v-for="(typo, index) in typos " class="transform w-112 h-152 transition duration-300 shrink-0 hover:-translate-y-1" :class="hover ? ' mx-4 translate-y-0' : '-translate-x-0 absolute'" :style="hover? `z-index: ${(typos.length)*10}` : `z-index: ${(typos.length - index - 1)*10}; 	transform: translateY(${index}rem) translateX(${index*3}rem);`"/>
  </div>
</template>

<script setup lang="ts">

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


</script>