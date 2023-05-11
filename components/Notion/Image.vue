<template>
    <img class="notion-img" :src="compurl" />
</template>

<script setup lang="ts">

const props = defineProps(['link'])

const compurl = computed(() => {
    
    if (process.env.NODE_ENV == "production" || process.env.NODE_ENV == "prerender") {
        const url = `/assets/images/${props.link.image.file.url.split('?').at(0).split("/").at(-1)}`
        // }
        // return props.link.image.file.url
        
        const assets = import.meta.glob('~/assets/**/*', {
            eager: true,
            import: 'default',
        })
        // @ts-expect-error: wrong type info
        return assets[url]
    }
    return props.link.image.file.url
    })
     

</script>