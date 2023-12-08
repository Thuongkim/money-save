<template lang="html">
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start form -->
      <form class="flex flex-col justify-start space-y-6">
        <div class="row">
          <label class="flex flex-col" for="fullName">
            <span>Full Name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg mt-1 border border-gray-100"
              type="text"
              placeholder="Full name"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            class="py-3 text-center w-full bg-primary text-white rounded-lg font-bold"
          >
            Sign up
          </button>
        </div>
      </form>

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
import { firebaseStore, firebaseAuth, timestamp } from "@/configs/firebase";
export default {
  setup() {},
};
</script>
<style lang=""></style>
