<template lang="html">
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onRegister()"
      >
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span>Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg mt-1 border border-gray-100"
              type="text"
              placeholder="Full name"
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span>Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg mt-1 border border-gray-100"
              type="email"
              placeholder="Email Address"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span>Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg mt-1 border border-gray-100"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white rounded-lg font-bold"
          >
            {{ isPending ? "Loading..." : "Sign up" }}
          </button>
        </div>
      </form>

      <!-- Start error -->
      <div v-if="error" class="text-center text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <!-- Start text -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1"
          ><router-link :to="{ name: 'login' }" class="text-primary font-bold"
            >Sign in</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

// import { firebaseStore, firebaseAuth, timestamp } from "@/configs/firebase";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    async function onRegister() {
      await signUp(email.value, password.value, fullName.value);
    }
    return { fullName, email, password, error, isPending, onRegister };
  },
};
</script>
<style lang=""></style>
