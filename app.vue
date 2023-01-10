<template>
  <div class="max-w-xl mx-auto">
    <h1 class="text-6xl font-brand text-green capitalize mt-12">GRENOBLE TYPO CLUB</h1>
    <p class="text-green text-lg my-2">Coming Soon </p>
  </div>
</template>
<script>
export default {
  setup () {
    useHead({
      script: [
      { async: true,
        src: 'https://scripts.withcabin.com/hello.js',
      }]
    }) },
    head: {
      title: 'Grenoble Typo Club'
    }
  }
</script>