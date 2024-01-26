<template>
  <article 
    v-if="note" 
    class="note-card" 
  >
    <section class="note-card__content">
      {{ note.content }}
    </section>
  </article>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  note: {
    type: Object,
    default: null,
  },
});

onMounted(() => {
  console.log("🟢 NoteCard has mounted", props.note);
});
</script>
<style scoped lang="scss">
.note-card {
    display: flex;
    flex-direction: column;
    margin: 10px;
    border: solid red 2px;
    box-shadow: 0 3px gray;
}
</style>
