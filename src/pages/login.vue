<template lang="html">
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSignIn"
      >
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
            {{ isPending ? "Loading..." : "Sign in" }}
          </button>
        </div>
      </form>

      <!-- Start error -->
      <div v-if="error" class="text-center text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <!-- Start text -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new member.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'register' }"
            class="text-primary font-bold"
            >Sign up</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignIn } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signIn } = useSignIn();
    const email = ref("");
    const password = ref("");
    async function onSignIn() {
      await signIn(email.value, password.value);
      if (!error.value) {
        router.push({ name: "profile" });
      }
    }
    return { email, password, error, isPending, onSignIn };
  },
};
</script>
<style lang=""></style>
