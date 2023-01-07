import {defineEventHandler} from "h3";
import {wishes} from "~/mock/wishes";

export default defineEventHandler(() => {
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve(wishes);
    }, 1000);
  });
})
