<template>
  <header class="header">
    <div class="header__container container">
      <NuxtLink to="/"><img src="../../assets/images/logo.svg" alt="Wishlist App" class="header__logo"></NuxtLink>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><NuxtLink to="/friends">Мои друзья</NuxtLink></li>
          <li class="header__nav-item"><NuxtLink to="/">Выйти</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
   const q = 1;
</script>
<style src="./header.css"></style>
