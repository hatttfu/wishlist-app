<template>
 <div class="homepage">
   <h1 class="homepage__title">
      Wishlist App
   </h1>
   <main class="main">
     <p class="paragraph">Здесь будет текст про это приложение, для чего оно, его описание и тд и тп</p>
      <p class="paragraph">И снизу кнопка</p>
     <button @click="$router.replace('login')" class="button button-primary">get started</button>
   </main>
 </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Wish from "~/components/wish/wish.vue";

  export default defineComponent({
    components: {Wish},
    layout: 'custom',
    async setup() {

    const isLoading = ref<Boolean>(false);

    return { isLoading };
  },
})

</script>

<style src="./index.css" />
