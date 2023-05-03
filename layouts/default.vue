<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden sm:px-0">
    <div class="w-full lg:w-80 flex shrink-0 lg:min-h-screen flex-row lg:flex-col lg:items-center justify-center lg:justify-start mx-4">
      <NuxtLink to="/"><Logo class="fill-green w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 my-4 lg:my-16"/></NuxtLink>
      <div class="rounded-md border-2 border-green hidden lg:block my-4">
        <div class="rounded-md m-2">
          <h6 class="text-green text-center mt-6 text-2xl font-lustucrust uppercase">Actualites</h6>
          <p class="text-green text-sm mb-6 m-4">La création d’une typographie est un processus laborieux où il est facile d’abandonner en cours de route lorsque l’on est débutant.e. C’est pourquoi nous avons eu l’idée au printemps 2021 de créer le Grenoble Typo Club pour nous réunir et avancer ensemble, nous soutenir et partager nos connaissances.
            Nos fontes sont distribuées sous licence libre, bancales mais pleines d’amour, créées pour que chacun.e puisse s’en emparer.</p>
          </div>
        </div>
      <div class="bg-green rounded-md hidden lg:block my-4">
        <div class="border-2 border-white m-2 rounded-md">
          <h6 class="text-white text-center mt-6 text-2xl font-digitale">A Propos</h6>
          <p class="text-white text-sm mb-6 m-4">La création d’une typographie est un processus laborieux où il est facile d’abandonner en cours de route lorsque l’on est débutant.e. C’est pourquoi nous avons eu l’idée au printemps 2021 de créer le Grenoble Typo Club pour nous réunir et avancer ensemble, nous soutenir et partager nos connaissances.
            Nos fontes sont distribuées sous licence libre, bancales mais pleines d’amour, créées pour que chacun.e puisse s’en emparer.</p>
          </div>
        </div>
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