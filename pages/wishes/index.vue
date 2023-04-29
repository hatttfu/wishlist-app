<template>
  <main class="wishes">
    <h1 class="wishes__title">
      Мой вишлист
    </h1>
      <ul class="wishes__list">
<!--        <li class="wishes__list-item" v-for="item in wishes.data">-->
<!--          <NuxtLink :to="`wishes/${item.id}`" class="flex flex-col hover:bg-gray-50 p-3">-->
<!--            <Wish :wish="item" />-->
<!--          </NuxtLink>-->
<!--        </li>-->
      </ul>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wish from "~/components/wish/wish.vue";
import axios from 'axios';

export default defineComponent({
  components: {Wish},
  layout: 'custom',

  async setup() {
    let wishes = {};
    try {
      let result = await axios.post(
        "http://127.0.0.1:8000/api/register/",
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
      console.log(error);
    }


    return { wishes };
  },
})

</script>

<style src="./wishes.css" />
