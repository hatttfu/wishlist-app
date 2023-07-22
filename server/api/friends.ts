import {defineEventHandler} from "h3";
import {friends} from "~/mock/friends";

export default defineEventHandler(() => {
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve(friends);
    }, 1000);
  });
})
