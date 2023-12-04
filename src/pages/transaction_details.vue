<template lang="">
  <div>
    <div v-if="this.transaction">
      This is transaction {{ $route.params.id }} detail.
      <p>Name: {{ this.transaction.name }}</p>
      <p>Price: {{ this.transaction.price }}</p>
      <button>
        <router-link
          :to="{
            name: 'transaction_edits',
            params: { id: $route.params.id },
          }"
          >Edit</router-link
        >
      </button>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }} detail...</div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchTransaction", { id: route.params.id });
    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
<style lang=""></style>
