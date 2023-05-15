<template>
    <div class="flex flex-col my-8 mx-8 max-w-4xl h-full">
        <h1 :style="{ 'font-family': font.data.value?.api.name }" class="text-6xl text-green my-8" >{{ font.data.value?.api.name }}</h1>
        <div class="my-16">
            <p class="text-green">
                {{ font.data.value?.api.description }}            
            </p>
            <div class="my-16">
                <div v-for="prev in font.data.value?.api.preview" :style="{ 'font-family': font.data.value?.api.name }" class="text-green text-2xl my-4">
                    {{ prev }}
                </div>
            </div>
            <h2 contenteditable="true" spellcheck="false" :style="{ 'font-family': font.data.value?.api.name }" class="text-4xl text-green border-2 relative rounded-md p-8 border-green my-8 ">
                {{ font.data.value?.api.text }}
                <div class="absolute top-0 right-0 p-2"><GlyphsEdit class="h-5"/></div>
            </h2>
            <a  :href="`/${font.data.value?.api.name}.zip`" :download="`${font.data.value?.api.name}.zip`"><Download class="h-20 w-20 fill-green hover:rotate-45 origin-center transition duration-150 mx-auto my-16 "/></a>
            
            <div>
                <div :class=" content.type == 'image' ? 'bg-green w-fit h-fit' : 'text-green'" v-for="content in font.data.value?.api.page.results">
                    <NotionBlock  class="mix-blend-screen" :key="content.id" :block="content"></NotionBlock>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Font from '~~/typescript/Font';

const route = useRoute();
const font = await useFetch(`/api/fonts?typo=${route.params.typo.toString().toLowerCase()}`);
// font.value = fonts.data.value?.api.find(f => { return f.name.toLowerCase() === route.params.typo.toString().toLowerCase()})

</script >

<style lang="css">

.notion-h1 {
    @apply text-xl font-semibold mt-16 mb-4;
}
[contenteditable] {
    outline: 0px solid transparent;
}
</style>