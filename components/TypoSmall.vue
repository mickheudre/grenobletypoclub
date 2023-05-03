<template>
    <div class="border-2 border-green text-green p-4 px-6  max-w-4xl" >
        <div class="flex justify-between">
            <span :style="{ 'font-family': name }"  class="text-2xl">{{ text }}</span>
            <NuxtLink :to="`typos/${name}`"><span class="bg-green grow-0 text-white capitalize p-2 px-4 h-fit rounded-md">{{ name }}</span></NuxtLink>

        </div>

        <div class="flex flex-col sm:flex-row justify-center items-center">
            <p class="my-8 font-bol">{{ description }}</p>
            <!-- <NuxtLink :to="`/typos/${name}`"><EnSavoirPlus class="h-16 w-16 hover:rotate-180 transition duration-150 stroke-green fill-green sm:ml-24 mr-3"/></NuxtLink> -->
        </div>
        
        
    </div>
</template>


<script setup lang="ts">


export interface Typo {
    name: string,
    text: string,
    description: string,
    size: string
}

const props = defineProps<Typo>()

</script>