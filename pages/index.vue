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
  import { defineComponent } from 'vue'
  import {useFetch} from "#app";
  import {getWishes} from "~/server/wishes/get-wishes";
  import {IWish} from "~/interface";
  import Wish from "~/components/wish/wish.vue";
  import axios from "axios/index";

  export default defineComponent({
    components: {Wish},
    layout: 'custom',
    async setup() {

    // const { data: wishes } = await getData();
    //
    // function getData() {
    //   isLoading.value = true;
    //   return axios("http://vohaa.pythonanywhere.com/")
    //     .then((res: any) => {
    //       return res;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       isLoading.value = false;
    //     })
    // }

    // const { data: wishes } = await useFetch('/api/wishes');

    // const newWishes = ref<IWish[] | null>(null);
    const isLoading = ref<Boolean>(false);

    // function getData() {
    //   isLoading.value = true;
    //   getWishes().then((data) => {
    //     newWishes.value = data;
    //     isLoading.value = false;
    //   })
    // }

    // getData();

    // return { wishes };
  },
})

</script>

<style src="./index.css" />
