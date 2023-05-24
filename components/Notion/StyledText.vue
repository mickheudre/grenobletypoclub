<template>
    <span v-if="text.annotations.bold"><b>{{ text.text.content }}</b></span>
    <span v-else-if="text.text.link === null">{{ text.text.content }}</span>
    <a v-else :href="text.text.link.url" class="font-semibold hover:underline">{{ text.text.content }}</a>
</template>

<script>
export default {
    props: {
        text: Object
    }
}
</script>