<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden sm:px-0">
    <div class="w-full lg:w-80 flex shrink-0 lg:min-h-screen flex-row lg:flex-col lg:items-center justify-center lg:justify-start mx-4">
      <NuxtLink to="/" aria-label="Retour à la page d'accueil"><Logo class="fill-green w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 my-4 lg:my-16" /></NuxtLink>
      <WidgetsNews />
      <WidgetsAbout />
      <WidgetsGallery />

    </div>
    <div class="flex flex-col relative w-full">
      <div class="border-2 border-green my-8 flex justify-between px-8 mx-4 sm:mx-8 rounded-md">
        <NuxtLink class="text-green text-xl my-4 font-semibold" to="typos" aria-label="Parcourir les typos ">Parcourir les typos <Arrow class="stroke-green h-6 w-6 inline" /></NuxtLink>
      </div>
      <slot />
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




</script>