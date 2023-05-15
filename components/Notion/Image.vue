<template>
    <img class="notion-img" :src="compurl" />
</template>

<script setup lang="ts">

const props = defineProps(['link'])

const compurl = computed(() => {
    
    if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "prerender") {
        const url = `/${props.link.image.file.url.split('?').at(0).split("/").at(-1)}`
        return url
    }
    return props.link.image.file.url
    })
     

</script>