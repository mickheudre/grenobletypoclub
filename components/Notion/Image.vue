<template>
        <img class="notion-img" :src="url" />
</template>

<script setup lang="ts">

const props = defineProps(['link'])

const url = computed(() => {
    
    if (process.env.NODE_ENV == "production") {
        return `~/assets/images/${props.link.image.file.url.split('?').at(0).split("/").at(-1)}`
    }
    return props.link.image.file.url

})

</script>