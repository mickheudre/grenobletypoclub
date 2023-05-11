<template>
  <div class="w-full" :class="hover ? 'flex flex-wrap ' : 'relative justify-center mr-12'">
    <TypoBig @click="hover = true"   v-bind="typo" v-for="(typo, index) in fonts" class="transform w-112  h-152 transition duration-300 shrink-0 hover:-translate-y-1" :class="hover ? ' mx-4 translate-y-0' : '-translate-x-0 absolute '" :style="hover? `z-index: ${(fonts.length)*10}` : `z-index: ${(fonts.length - index - 1)*10}; 	transform: translateY(${index}rem) translateX(${-fonts.length+index*3}rem);`"/>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<
{
  fonts: Array<{
    name: string,
    text: string,
    preview: Array<string>
}>}
>()

const hover = ref(false)

</script>