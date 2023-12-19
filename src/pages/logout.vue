<template lang="">
  <div>Logout Page</div>
</template>
<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();
    async function onLogout() {
      await logout();
      if (!error.value) {
        router.push({ name: "login" });
      }
    }
    onLogout();
  },
};
</script>
<style lang=""></style>
