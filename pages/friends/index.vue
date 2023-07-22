<template>
  <div class="friends__container">
    <h1 class="friends__title">Мои друзья</h1>
<!--    <ul class="friends__list">-->
<!--      <li v-for="(friend, index) in friends" :key="index" class="friends__friend friend">-->
<!--        <h2 class="friend__name">{{friend.name}}</h2>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useFetch} from "#app";
import {definePageMeta} from "#imports";

export default defineComponent({
  async setup() {
    definePageMeta({
      middleware: ["auth"]
    })

    const {data: friends} = await useFetch('/api/friends');

    return { friends };
  },
})

</script>

<style>

</style>
