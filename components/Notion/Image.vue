<template>
    <img class="notion-img" :src="link.image.file.url" />
</template>

<script setup lang="ts">
const props = defineProps(['link'])
</script>