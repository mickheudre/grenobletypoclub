<template>
  <div class="grid grid-cols-2 w-screen h-screen justify-center">
    <div class="w-64 flex flex-col items-center border-r-2 border-green">
      <Logo class="fill-green w-40 h-40 my-16"/>
      <NuxtLink class="text-green w-full py-4 text-center border-y-2 uppercase">A Propos</NuxtLink>
      <NuxtLink class="text-green w-full py-4 text-center border-b-2 uppercase">Typographie</NuxtLink>
    </div>
    <div class="w-2/3 border-2 border-green flex flex-col my-12 ">
      <div class="w-full flex justify-end">
        <h4 class="text-white w-min m-2  p-3 py-2 bg-green text-xs rounded-md uppercase ">
          Lustucrust
        </h4>
      </div>
      <div class="flex flex-row justify-center  w-full h-full">
        <div class="flex flex-col h-full gap-8 m-16 ">
          <a class="font-lustucrust text-green text-4xl">a b c d e f g h i j k l m n o p q r s t u v w x y z</a>
          <a class="font-lustucrust text-green capitalize text-4xl">a b c d e f g h i j k l m n o p q r s t u v w x y z</a>
          <a class="font-lustucrust text-green text-4xl">0 1 2 3 4 5 6 7 8 9</a>

          <div class="flex justify-center">
          <a  href="/lustucrust.zip" download="lustucrust.zip"><Download class="h-20 w-20 fill-green"/></a>
          </div>
        </div>
        <div class="h-full relative relative w-12">
          <div class="absolute inset-y-0 left-0 -translate-x-1/2 translate-y-1/2">
            <p class=" w-max font-lustucrust text-2xl text-green rotate-90 origin-center">La douleur peut etre positive</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup () {
    useHead({
      script: [
      { 
        async: true,
        src: 'https://scripts.withcabin.com/hello.js',
      }]
    }) },
    head: {
      title: 'Grenoble Typo Club'
    }
  }
</script>