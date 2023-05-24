<template>
    <div class="rounded-md border-2 border-green hidden lg:block my-4">
        <div class="rounded-md m-2">
            <h6 class="text-green text-center mt-6 text-2xl font-lustucrust uppercase">Gallerie</h6>
            <div class="grid grid-cols-1">

            <div :class=" content.block.type == 'image' ? 'bg-green w-fit h-fit' : 'text-green'" class="m-4" v-for="content in images">
                <NuxtLink :to="content.name"><NotionBlock class="mix-blend-screen" :key="content.block.id" :block="content.block" :aria-label="`En savoir plus sur  ${content.name}`"></NotionBlock></NuxtLink>
                
            </div>
        </div>

        </div>

    </div>
</template>

<script setup lang="ts">
const fonts = await useFetch('/api/fonts')

const images = ref([])

fonts.data.value.api.forEach(element => {
    element.page.results.forEach(block => {
        if (block.type == "image") 
        {
            images.value.push({
                name: element.name.toLowerCase(),
                block
            })
        }
    })
});


</script>