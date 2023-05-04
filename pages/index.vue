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
const selected = ref("lustucrust")

const hover = ref(false)

const typos : Array<Typo> = [
{
  name: "lustucrust",
  text: "La douleur peut etre positive",
  description: "LUSTUCRUST est une néo-gothique influencée par les pleins des typographies gothiques. Elle a été composée principalement avec des barres verticales et a été élaborée d'abord pour un calendrier en soutien à un lieu autogéré, le Local Autogéré à Grenoble.",
  size: "2xl",
  preview: ["a b c d e f g h i j k l m n o p q r s t u v w x y z", "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "0 1 2 3 4 5 6 7 8 9"]
},
{
  name: "digitale",
  text: "La propriete privee mene au crime",
  description: "DIGITALE est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "lg",
  preview: ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "0 1 2 3 4 5 6 7 8 9"]

},
{
  name: "Ariale",
  text: "Ma.on doux.ce, nous étions comme deux exilé.es",
  description: "Ariale est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "xl",
  preview: ["a b c d e f g h i j k l m n o p q r s t u v w x y z", "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "0 1 2 3 4 5 6 7 8 9"]

},
]




</script>