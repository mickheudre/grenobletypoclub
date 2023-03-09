<template>
    <div class="w-2/3 h-4/5 border-2 border-green flex flex-col my-12 bg-white">
      <div class="w-full flex justify-end">
        <h4 class="text-white w-min m-2  p-3 py-2 bg-green text-xs rounded-md uppercase ">
          {{ name }}
        </h4>
      </div>
      <div class="flex flex-row justify-center  w-full h-full">
        <div class="flex flex-col h-full gap-8 m-16 ">
          <a :class="`font-${name} text-${size}`" class="text-green">a b c d e f g h i j k l m n o p q r s t u v w x y z</a>
          <a :class="`font-${name} text-${size}`" class="text-green capitalize text-2xl">a b c d e f g h i j k l m n o p q r s t u v w x y z</a>
          <a :class="`font-${name} text-${size}`" class="text-green text-2xl">0 1 2 3 4 5 6 7 8 9</a>

          <div class="flex justify-center">
          <a  :href="`/${name}.zip`" :download="`${name}.zip`"><Download class="h-20 w-20 fill-green"/></a>
          </div>
        </div>
        <div class="relative w-12">
          <div class="absolute left-0 -translate-x-1/2 translate-y-1/2 inset-y-0 ">
            <p :class="`font-${name} text-${size}`" class=" w-max text-2xl text-green rotate-90 origin-center">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
export interface Typo {
    name: string,
    text: string,
    size: string
}
const props = defineProps<Typo>()

</script>