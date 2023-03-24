<template>
  <div class="login__container">
    <div class="login__description">
      <div class="login__description-content">
        <h2 class="login__description-title">Зарегистрируйся и узнай,</h2>
        <p class="login__description-text">что хочет твой друг на день рождение</p>
      </div>
    </div>
    <div class="login__form">
      <div class="login__form-container">
        <h1 class="login__form-title">{{ enterInfo.title }}</h1>
        <h4 @click="changeEnterType" class="login__form-subtitle"> {{ enterInfo.subtitle }}
          <span class="login__form-switcher"> {{ enterInfo.switcherText }} </span>
        </h4>
        <div class="login__form-fields">
          <div class="login__form-field" v-for="(field, key) in currentFields"
               :key="key"
          >
            <label class="login__form-label"> {{ field.props.label }}</label>
            <input
              v-model="field.value"
              v-bind="field.props"
              v-on="field.methods"
              class="input login__form-input"
            />
          </div>
        </div>
        <button @click="goNext" class="button button-primary login__form-button">Войти</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed} from "vue";
import {definePageMeta} from "#imports";
import type { Ref } from 'vue'
import {AuthFormNS} from "~/pages/login/types";
import Infrastructure from "@/server/index";

export default {
  setup() {
    const enum ENTER_TYPES {
      LOGIN,
      REGISTER
    }

    const ENTER_TITLES: AuthFormNS.IEnterInfo[] = [
      {
        title: "Авторизация",
        subtitle: "Впервые у нас? ",
        switcherText: "Зарегистрироваться"
      },
      {
        title: "Регистрация",
        subtitle: "Уже есть аккаунт?",
        switcherText: "Авторизация"
      }
    ]

    definePageMeta({
      layout: "custom",
    });

    const enterType = ref(ENTER_TYPES.LOGIN);

    const enterInfo = computed<AuthFormNS.IEnterInfo>(() => ENTER_TITLES[enterType.value]);

    function changeEnterType() {
      enterType.value = enterType.value === ENTER_TYPES.LOGIN ? ENTER_TYPES.REGISTER : ENTER_TYPES.LOGIN;
    }

    const FORM_FIELDS: Ref<AuthFormNS.Form> = ref({
      register: {
        name: {
          value: "",
          props: {
            label: "Никнейм",
            required: true,
            disabled: false,
            type: "text",
            get placeholder() {
              return enterType.value === ENTER_TYPES.LOGIN ? "Введите свой ник" : "Придумайте ник"
            }
          },
          methods: {
            input(value: string) {
              console.log(value)
            }
          }
        },
        email: {
          value: "",
          props: {
            label: "Email",
            required: true,
            disabled: false,
            type: "email",
            placeholder: "email"
          },
          methods: {
            input(value: string) {
              console.log(value)
            }
          }
        },
        password: {
          value: "",
          props: {
            label: "Пароль",
            required: true,
            disabled: false
          },
          methods: {
            input(value: string) {
              console.log(value)
            }
          }
        }
      },
      login: {
        email: {
          value: "",
          props: {
            label: "Email",
            required: true,
            disabled: false,
            type: "email",
            placeholder: "email"
          },
          methods: {
            input(value: string) {
              console.log(value)
            }
          }
        },
        password: {
          value: "",
          props: {
            label: "Пароль",
            required: true,
            disabled: false
          },
          methods: {
            input(value: string) {
              console.log(value)
            }
          }
        }
      }
    });

    const currentFields = computed<AuthFormNS.Register | AuthFormNS.Login>(() =>
      enterType.value === ENTER_TYPES.LOGIN ?
         FORM_FIELDS.value.login : FORM_FIELDS.value.register
    );

    function goNext() {
      if (validateForm()) {
        Infrastructure.auth.register(currentFields.value.)
      }
    }

    function validateForm(): boolean {
      return true;
    }

    return { changeEnterType, FORM_FIELDS, enterInfo, currentFields};
  }
}
</script>

<style lang="css" src="./index.css" />
