<template>
    <div>
        <NotionBlock v-for="content in page.results"  :key="content.id" :block="content"></NotionBlock>
    </div>
</template>

<script setup lang="ts">
const props =  defineProps(['page'])
</script>