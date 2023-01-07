<template>
  <div class="wish">
      <div class="homepage__wish"></div>
      <img class="homepage__wish-image" v-if="wish.pictures && wish.pictures.length" src="/images/item.png" :alt="wish.title">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useFetch} from "#app";
import {IWish} from "~/interface";
import {getWishes} from "~/server/wishes/get-wishes";

export default defineComponent({
  layout: 'custom',

  setup() {

    const props = defineProps(['wish']);

    const isLoading = ref<Boolean>(false);

    return { wish };

  },
})
</script>
<style src="./wish.css"></style>
