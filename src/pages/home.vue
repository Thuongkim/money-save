<template lang="html">
  <div>
    <h1>overview</h1>
    <h2 v-if="user">{{ user.displayName }}</h2>
  </div>
</template>
<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
<style lang=""></style>
<!-- <template lang="html">
  <div>
    <input type="text" v-model="searchText" />
    <ul v-for="(customer, index) in filterCustommers" :key="index">
      <li>{{ customer }}</li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref, computed } from "vue";
export default {
  setup() {
    const searchText = ref("");
    const customers = reactive([
      "Micheal",
      "Sophius",
      "Garen",
      "Ash",
      "Soraka",
    ]);
    const filterCustommers = computed(() =>
      customers.filter((customer) =>
        customer.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );
    return { searchText, filterCustommers };
  },
};
</script>
<style lang=""></style> -->
