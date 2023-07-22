import {defineNuxtRouteMiddleware, navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (!isAuthenticated()) {
    return navigateTo('/login')
  }
})

function isAuthenticated(): boolean {
  return true;
}
