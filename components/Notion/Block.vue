<template>
  <div>
    <h1 class="notion-h1"
      v-if="isValidHeading1(block)"
      >
      {{ block.heading_1.rich_text[0].plain_text }}
    </h1>
    <!-- <iframe class="notion-embed" :src="this.block.embed.url" v-if="isValidEmbed(block)">Blabla</iframe>
    <h3
    v-if="isValidHeading3(block)"
    >
    {{ block.heading_3.rich_text[0].plain_text }}
  </h3> -->
  <NotionParagraph
  v-if="isValidParagraph(block)"
  class="my-2"
  v-bind:block="block"
  >
</NotionParagraph>
<NotionImage v-if="isValidImage(block)"
:link="block" 
/>
<!-- <li v-if="isValidBulletedListItem(block)">
  {{ block.bulleted_list_item.rich_text[0].plain_text }}
</li>
<toggle v-if="isValidToggleItem(block)" :block="block" />
<Table v-if="isValidTableItem(block)" :block="block" /> -->
</div>
</template>

<script setup>

const props = defineProps(['block'])

const isValidParagraph = (block) => {
  if (block.type !== "paragraph") {
    return false;
  }
  
  if (block.paragraph.rich_text.length == 0) {
    return false;
  }
  
  if (block.paragraph.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}

const isValidHeading1 = (block) => {
  if (block.type !== "heading_1") {
    return false;
  }
  
  if (block.heading_1.rich_text.length == 0) {
    return false;
  }
  
  if (block.heading_1.rich_text[0].plain_text.length == 0) {
    return false;
  }
  return true;
}

const isValidImage = (block) => {
  if (block.type !== "image") {
    return false
  }
  return true;
}
</script>
