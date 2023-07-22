<template>
  <div class="wish">
      <div class="wish__image-wrapper">
        <img class="wish__image" v-if="wish.pictures && wish.pictures.length" src="/images/item.png" :alt="wish.title">
        <img v-else src="../../assets/images/wish-placeholder.png" alt="Картинка отсутствует">
      </div>
      <p class="wish__title">{{wish.title}}</p>
  </div>
</template>

<script lang="ts">
import {IWish} from "~/interface";
import {PropType} from "@vue/runtime-core";
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  props: {
    wish: {
      type: Object as PropType<IWish>,
      required: true
    }
  },
  setup(props) {
    return { props }
  }
});

</script>
<style src="./wish.css"></style>
