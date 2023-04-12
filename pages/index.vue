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
  size: "2xl"
},
{
  name: "digitale",
  text: "La propriete privee mene au crime",
  size: "xl"
},
]

</script>