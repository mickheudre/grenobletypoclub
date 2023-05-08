<template>
  <div class="max-w-xl border-2 border-green flex flex-col justify-between my-12 bg-white">
    <div class="w-full flex justify-end">
      <NuxtLink :to="`${name.toLowerCase()}`">
        <h4 class="text-white w-min m-4 p-4 py-3 bg-green text-xs rounded-md uppercase ">
          {{ name }}
        </h4>
      </NuxtLink>
    </div>
    <div class="flex flex-row   w-full h-full">
      <div class="flex flex-col justify-between gap-8 m-16 ">
        <div class="flex flex-col">
          <a v-for="line in preview" :style="{ 'font-family': name }" class="text-green my-4 text-xl">{{ line }}</a>
        </div>
        
        <div class="flex justify-center">
          <a  :href="`/${name}.zip`" :download="`${name}.zip`"><Download class="h-20 w-20 fill-green hover:rotate-45 origin-center transition duration-150"/></a>
        </div>
      </div>
      <div class="relative w-fit h-fit">
        <p :style="{ 'font-family': name }"  class="absolute -left-1 top-0  mt-12 w-max text-green rotate-90 origin-top-left text-xl">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  name: string,
  text: string,
  preview: Array<string>
}>()
  
  
</script>