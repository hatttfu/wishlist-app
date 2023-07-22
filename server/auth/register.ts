import axios from "axios";
import {useRuntimeConfig} from "#app";

const config = useRuntimeConfig();

export default function register( email: string, username: string, password: string): Promise<void> {
  return axios.post(
      config.public.API_URL + "register/" ,
      {
        email,
        username,
        password
      }
  ).then(() => { return; })
}
