<template>
 <div class="homepage">
   <Header/>
   <div class="homepage__container container">
     <h1 class="homepage__title">
       Мой вишлист
     </h1>
     <main class="main">
       <ul class="homepage__wishes">
         <li class="homepage__wish" v-for="item in wishes">
           <Wish :wish="item" />
         </li>
       </ul>
     </main>
   </div>
 </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {useFetch} from "#app";
  import {getWishes} from "~/server/wishes/get-wishes";
  import {IWish} from "~/interface";
  import Wish from "~/components/wish/wish.vue";

  export default defineComponent({
    components: {Wish},
    layout: 'custom',
    async setup() {

    const { data: wishes } = await useFetch('/api/wishes');
    const newWishes = ref<IWish[] | null>(null);
    const isLoading = ref<Boolean>(false);

    function getData() {
      isLoading.value = true;
      getWishes().then((data) => {
        newWishes.value = data;
        isLoading.value = false;
      })
    }

    getData();

    return { wishes, newWishes };
  },
})

</script>

<style src="./index.css" />
