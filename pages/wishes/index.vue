<template>
<!--  <main class="wishes">-->
<!--    <h1 class="wishes__title">-->
<!--      Мой вишлист-->
<!--    </h1>-->
<!--      <ul class="wishes__list">-->
<!--        <li class="wishes__list-item" v-for="item in wishes.data">-->
<!--          <NuxtLink :to="`wishes/${item.id}`" class="flex flex-col hover:bg-gray-50 p-3">-->
<!--            <Wish :wish="item" />-->
<!--          </NuxtLink>-->
<!--        </li>-->
<!--      </ul>-->
<!--  </main>-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wish from "~/components/wish/wish.vue";
import {definePageMeta} from "#imports";
import axios from 'axios';

export default defineComponent({
  components: {Wish},
  layout: 'custom',

  async setup() {
    // definePageMeta({
    //   middleware: ["auth"]
    // })

    let wishes = {};
    try {
      let result = await axios.post(          // any call like get
        "http://127.0.0.1:8000/api/register/",         // your URL
        {
          "email":
            "gkey-587@mail.ru"
          ,
          "username":
            "Gal"
          ,
          "password":
            "1234567890"

        }
      );
      console.log('result', result);
    } catch (error) {
      console.log(error);     // NOTE - use "error.response.data` (not "error")
    }


    return { wishes };
  },
})

</script>

<style src="./wishes.css" />
