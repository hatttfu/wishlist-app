<template>
  <div class="login__container">
    <div class="login__description">
      <div class="login__description-content">
        <h2 class="login__description-title">Зарегистрируйся и узнай,</h2>
        <p class="login__description-text">что хочет твой друг на день рождение</p>
      </div>
    </div>
    <div v-if="isLoading" class="loader"></div>
    <Transition>
      <div :key="enterInfo" class="login__form">
          <div class="login__form-container">
            <h1 class="login__form-title">{{ enterInfo.title }}</h1>
            <h4 @click="changeEnterType" class="login__form-subtitle"> {{ enterInfo.subtitle }}
              <span class="login__form-switcher"> {{ enterInfo.switcherText }} </span>
            </h4>
            <div class="login__form-fields">
              <div class="login__form-field" v-for="(field, key) in currentFields"
                   :key="key"
              >
                <input
                  v-model="field.value"
                  v-bind="field.props"
                  v-on="field.methods"
                  class="input login__form-input"
                />
                <label class="login__form-label"> {{ field.props.placeholder }}</label>
              </div>
            </div>
            <button @click="goNext" class="button button-primary login__form-button">Войти</button>
          </div>
      </div>
    </Transition>

  </div>
</template>

<script lang="ts">
import {ref, computed} from "vue";
import {definePageMeta, useAsyncData} from "#imports";
import type { Ref } from 'vue';
import {AuthFormNS} from "~/types/login";
import axios from "axios";

export default {
  setup() {
    const rerender: Ref<boolean> = ref(false);
    const enum ENTER_TYPES {
      LOGIN,
      REGISTER
    }

    const isLoading: Ref<boolean> = ref(false);

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

    const enterInfo = computed<AuthFormNS.IEnterInfo>(() => {
      return ENTER_TITLES[enterType.value];
    });

    function changeEnterType() {
      enterType.value = enterType.value === ENTER_TYPES.LOGIN ? ENTER_TYPES.REGISTER : ENTER_TYPES.LOGIN;
    }

    const FORM_FIELDS: Ref<AuthFormNS.Form> = ref({
      register: {
        name: {
          value: "",
          props: {
            required: true,
            disabled: false,
            type: "text",
            placeholder: "Никнейм"
          },
          methods: {
            input(value: string) {
            }
          }
        },
        email: {
          value: "",
          props: {
            required: true,
            disabled: false,
            type: "email",
            placeholder: "Email"
          },
          methods: {
            input(value: string) {
            }
          }
        },
        password: {
          value: "",
          props: {
            required: true,
            disabled: false,
            placeholder: "Пароль"
          },
          methods: {
            input(value: string) {
            }
          }
        }
      },
      login: {
        email: {
          value: "",
          props: {
            required: true,
            disabled: false,
            type: "email",
            placeholder: "Email"
          },
          methods: {
            input(value: string) {
            }
          }
        },
        password: {
          value: "",
          props: {
            required: true,
            disabled: false,
            placeholder: "Пароль"
          },
          methods: {
            input(value: string) {
            }
          }
        }
      }
    });

    const currentFields = computed<AuthFormNS.Register | AuthFormNS.Login>(() =>
      enterType.value === ENTER_TYPES.LOGIN ?
         FORM_FIELDS.value.login : FORM_FIELDS.value.register
    );

    async function goNext() {
      if (validateForm()) {
        isLoading.value = true;
        console.log({
          email: currentFields.value.email.value,
          password: currentFields.value.password.value,
        })
        axios.post('http://localhost:8000/auth',
            JSON.stringify({
              email: currentFields.value.email.value,
              password: currentFields.value.password.value,
            }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        )
        .then((res) => {
          console.log('RESPONSE FROM SERVER', res);
        })
      }
    }

    function validateForm(): boolean {
      return true;
    }

    return { changeEnterType, FORM_FIELDS, enterInfo, currentFields, goNext, isLoading};
  }
}
</script>

<style lang="css" src="./index.css" />
