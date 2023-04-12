<template>
    <div class="border-2 border-green text-green p-4 px-6 relative" >
        <span class="bg-green text-white capitalize p-1 px-3 rounded-md absolute right-4 top-4">{{ name }}</span>
        <h2 :style="{ 'font-family': name }" :class="styling" class="mb-4"> {{ name }}</h2>
        <span :style="{ 'font-family': name }" :class="substyling" class="">{{ text }}</span>
    </div>
</template>


<script setup lang="ts">


export interface Typo {
    name: string,
    text: string,
    size: string
}
const styling = computed(() => ({
    'text-4xl': props.size == "2xl",
    'text-2xl': props.size == "xl"
}))

const substyling = computed(() => ({
    'text-2xl': props.size == "2xl",
    'text-lg': props.size == "xl"
}))

const props = defineProps<Typo>()

</script>