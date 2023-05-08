<template>
    <div class="flex flex-col my-8 mx-8 max-w-4xl h-full">
        <h1 :style="{ 'font-family': font?.name }" class="text-6xl text-green my-8" >{{ font?.name }}</h1>
        <div class="my-16">
            <p class="text-green">
                {{ font?.description }}            
            </p>
            <div class="my-16">
                <div v-for="prev in font?.preview" :style="{ 'font-family': font?.name }" class="text-green text-2xl my-4">
                    {{ prev }}
                </div>
            </div>
            <h2 contenteditable="true" spellcheck="false" :style="{ 'font-family': font?.name }" class="text-4xl text-green border-2 relative rounded-md p-8 border-green my-8 ">
                {{ font?.text }}
                <div class="absolute top-0 right-0 p-2"><GlyphsEdit class="h-5"/></div>
            </h2>
            <div></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const fonts= await useGetFonts()
const font = ref(fonts.value.find(f => { return f.name.toLowerCase() === route.params.typo.toString().toLowerCase()}))
</script>

<style lang="css">
[contenteditable] {
    outline: 0px solid transparent;
}
</style>