<template>
    <div class="border-2 border-green text-green p-4 px-6 relative" >
        <span class="bg-green text-white capitalize p-1 px-3 rounded-md absolute right-6 top-4">{{ name }}</span>
        <h2 :style="{ 'font-family': name }" :class="styling" class="mb-2"> {{ name }}</h2>
        <span :style="{ 'font-family': name }" :class="substyling" class="">{{ text }}</span>
        <div class="flex flex-col sm:flex-row justify-center items-center">
            <p class="my-8 ">{{ description }}</p>
            <a :href="`/${name}.zip`" :download="`${name}.zip`"><DownloadInverted class="h-20 w-20 stroke-green fill-green sm:ml-24"/></a>
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
const styling = computed(() => ({
    'text-3xl sm:text-5xl': props.size == "2xl",
    'text-xl sm:text-3xl': props.size == "xl"
}))

const substyling = computed(() => ({
    'text-2xl': props.size == "2xl",
    'text-lg': props.size == "xl"
}))

const props = defineProps<Typo>()

</script>