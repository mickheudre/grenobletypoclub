<template>
    <a :href="link" class="font-semibold hover:underline"><slot></slot></a>
</template>

<script>
export default {
    props: {
        link: String
    }
}
</script>