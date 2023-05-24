<template>
    <p ref="paragraph"> 
        <NotionStyledText v-for="(element, index) in block.paragraph.rich_text" :key="index" :text="element"></NotionStyledText>
    </p>
</template>

<script setup>

const props = defineProps(['block'])

</script>