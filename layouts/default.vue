<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen overflow-hidden sm:px-0">
    <div class="w-full lg:w-80 flex shrink-0 lg:min-h-screen flex-row lg:flex-col lg:items-center justify-center lg:justify-start mx-4">
      <NuxtLink to="/"><Logo class="fill-green w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 my-4 lg:my-16"/></NuxtLink>
      <WidgetsNews />
      <WidgetsAbout />
      </div>
      <div class="flex flex-col relative w-full">
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