<template lang="html">
  <!-- Start info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full mx-auto overflow-hidden">
          <img
            class="w-full h-auto object-cover"
            src="https://imgv3.fotor.com/images/gallery/girl-mega-anime-avatar-with-black-long-hair-made-in-fotor-anime-avatar-creator.jpg"
            alt="Profile image"
          />
        </div>
        <div class="font-bold text-center text-xl text-primary">
          {{ user.displayName }}
        </div>
        <div class="text-center font-semibold text-gray-400">
          {{ user.email }}
        </div>
      </div>
    </div>
  </div>

  <!-- Start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="text-xl font-bold text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="(profileOption, index) in profileOptions" :key="index">
              <router-link
                :to="profileOption.router"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex text-left items-center"
                  :class="index + 1 === profileOptions.length ? 'text-red' : ''"
                >
                  <i :class="`t2ico text-2xl ${profileOption.icon}`"></i>
                  <h5 class="ml-3 font-semibold">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right text-2xl"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    return { user, profileOptions };
  },
};
</script>
<style lang=""></style>
