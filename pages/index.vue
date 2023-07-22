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


<script setup>
  import '~/assets/css/homepage.css'
  import { definePageMeta } from '#imports';
  // import { ref } from 'vue';

  definePageMeta({
    layout: 'custom'
  })
  // const isLoading = ref<Boolean>(false);
</script>
