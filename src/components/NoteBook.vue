<template>
  <aside class="note-book">
    <section class="note-book__notes">
      <NoteCardComponent
        v-for="(notes, index) in notes"
        :key="index"
        :note="note"
      />
    </section>

    <section class="note-book__actions">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </section>
  </aside>
</template>
<script setup>
import { ref, onMounted} from "vue";
import NoteCardComponent from "./NoteCardComponent.vue";

onMounted(() => {
  console.log("📒 NoteBook has mounted");
});
</script>
<style scoped lang="scss"></style>
