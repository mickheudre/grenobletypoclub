<template>
    <img class="notion-img" :src="compurl" :alt="props.link.image.caption.length > 0 ? props.link.image.caption[0].plain_text : 'Une image sans description'"/>
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