import {wishes} from "~/mock/wishes";
import {IWish} from "~/interface";

export function getWishes(): Promise<IWish[]> {
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve(wishes);
    }, 1000);
  });
}
